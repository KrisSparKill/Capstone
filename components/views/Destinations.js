import html from "html-literal";
import * as store from "../../store";

export default () => html`
  <div class="flexContainer">
    <div class="${store.Global.selectedBrand} secondaryBkgrnd">
      <div class="${store.Global.selectedBrand} h2">
        <h2>Please select your Sailing Below</h2>
        <div class="dropdown">
          <select id="activityDropdown">
            <option value="">Select Sailing</option>
            <option value="CarnivalSunshine-2024-10-21"
              >Carnival Sunshine 10/21/2024</option
            >
          </select>
        </div>
      </div>
    </div>
  </div>
`;
