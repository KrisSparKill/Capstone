import html from "html-literal";
import logo from "../../assets/img/AotGLogo.png";
import mtnTrees from "../../assets/img/MountainsTrees.png";
import * as store from "../../store";

export default () => html`
  <!--img src=${logo} class="center" /-->
  <div class="flexContainer">
    <div class="aotg h1">Welcome to Adventures on the Go</div>
    <div class="aotg p">
      Please select an option below to get started
    </div>
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
    </div>
  </div>
`;
