import { Header, Main, Footer } from "./Components";
import * as store from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();
}

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

// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });
