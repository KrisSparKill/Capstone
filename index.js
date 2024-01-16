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

  if (state.view === "Destinations") {
    const activityDropdown = document.getElementById("activityDropdown");
    activityDropdown.addEventListener("change", () => {
      const selectedSailing = activityDropdown.value;
      if (selectedSailing) {
        router.navigate("/Activity");
      }
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
  if (state.view === "Barcrawl") {
    var elems1 = document.getElementsByClassName("box");
    Array.from(elems1).forEach(v =>
      v.addEventListener("change", function() {
        this.parentNode.classList.toggle("checked");
      })
    );
  }
  if (state.view === "Advisors") {
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
          store.Brand.brands.push(response.data);
          router.navigate("/Brand");
        })
        .catch(error => {
          console.log("No New Brand", error);
        });
    });
  }
}

router.hooks({
  before: async (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Activity";
    switch (view) {
      case "Activity":
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=25.04&lon=-77.39&units=imperial&exclude=hourly&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          );
          const weatherData = parseWeatherData(response.data);
          console.log("Weather Data:", weatherData);

          store.Activity.weather = weatherData;

          done();
        } catch (error) {
          console.error("No Weather For You", error);
          done();
        }
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

function parseWeatherData(apiData) {
  console.log("API Data:", apiData);
  const forecastData = apiData.list.slice(0, 5).map(item => {
    return {
      dateTime: item.dt_txt,
      minTemp: item.main.temp_min,
      maxTemp: item.main.temp_max
    };
  });
  return {
    city: apiData.city.name,
    forecast: forecastData
  };
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
