import { Header, Main, Footer } from "./components";
import * as store from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  const brand = store.Global.nonThemedViews.includes(state.view)
    ? "aotg"
    : store.Global.selectedBrand;
  document.querySelector("#root").innerHTML = `
  <div class="${brand} primaryBkgrnd">
  ${Header(state)}
  ${Main(state)}
  ${Footer(state)}
  </div>
  `;

  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  if (state.view === "Home") {
    document.getElementById("brand").addEventListener("change", event => {
      event.preventDefault();
      store.Global.selectedBrand = event.target.value;
      router.navigate("/Destinations");
    });
  }
  if (state.view === "Scavenger") {
    var elems = document.getElementsByClassName("box");
    Array.from(elems).forEach(v =>
      v.addEventListener("change", function() {
        this.parentNode.classList.toggle("checked");
      })
    );
  }
  if (state.view === "TAs") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      const requestData = {
        contact: inputList.contact.value,
        email: inputList.email.value,
        agency: inputList.agency.value,
        abbreviation: inputList.abbreviation.value,
        primaryBkgrnd: inputList.primaryBkgrnd.value,
        secondaryBkgrnd: inputList.secondaryBkgrnd.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.BRANDS_API_URL}/brands`, requestData)
        .then(response => {
          store.Brands.brands.push(response.data);
          router.navigate("/Brand");
        })
        .catch(error => {
          console.log("No Brands", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Activity";
    switch (view) {
      case "Activity":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=Charleston`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Activity.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Activity";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Home);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
