import html from "html-literal";
import logo from "../../assets/img/AotGLogo.png";
import mtnTrees from "../../assets/img/MountainsTrees.png";
import * as store from "../../store";

export default () => html`
  <!--img src=${logo} class="center" /-->
  <div class="flexContainer">
    <h1>Welcome to Adventures on the Go</h1>
    <p>Please select an option below to get started</p>
    <img src=${mtnTrees} class="trees" />
    <div class="aotg secondaryBkgrnd dropdown">
      <select name="brand" id="brand">
        ${store.Global.brands
          .map(
            brand =>
              html`
                <option value="${brand.class}">${brand.name}</option>
              `
          )
          .join("")}
      </select>

      <!-- <div class="dropdown" class="trees">
        <button class="dropbtn">
          Select Your Travel Agency
          <span class="material-symbols-outlined">expand_more </span>
        </button>
        <div class="dropdown-content">
          <a href="/Destinations" data-navigo>I Don't Have One</a>
          <a href="/Destinations" data-navigo>Hidden Adventures Travel Co</a>
          <a href="/Destinations" data-navigo>Pursue Your Dreams Travel</a>
        </div>
      </div> -->
    </div>
  </div>
`;
