import html from "html-literal";
import * as store from "../../store";

export default () => html`
  <div class="flexContainer">
    <div class="${store.Global.selectedBrand} secondaryBkgrnd">
      <h2>Please select your Sailing Below</h2>
      <div class="dropdown">
        <button class="dropbtn">
          Select Your Cruise Ship
          <span class="material-symbols-outlined">expand_more </span>
        </button>
        <div class="dropdown-content">
          <a href="/Activity" data-navigo>Carnival Sunshine 10/21/2024</a>
        </div>
      </div>
    </div>
  </div>
`;
