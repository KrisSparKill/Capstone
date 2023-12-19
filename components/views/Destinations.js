import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";

export default () => html`
  <div class="flexContainer">
    <img src=${mtnTrees} class="trees" />
    <div class="orangeBkgrnd">
      <h2>Please select your Sailing Below</h2>
      <div class="dropdown">
        <button class="dropbtn">
          Select Your Cruise Ship
          <span class="material-symbols-outlined">expand_more </span>
        </button>
        <div class="dropdown-content">
          <a href="/Activity.js">Carnival Sunshine 10/21/2024</a>
        </div>
      </div>
    </div>
  </div>
`;
