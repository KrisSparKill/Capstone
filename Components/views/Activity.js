import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";

export default () => html`
<main>
<div class="flexContainer">
  <img src=${mtnTrees} class="center">
  <div class="orangeBkgrnd">

  <div class="activities">
    <div class="homeport"><br>
    Checkout Charleston<br></div>
    <div class="ship-facts"><br>
    Carnival Sunshine<br></div>
    <div class="itinerary"><br>Your Itinerary<br></div>
    <div class="fun"><br>Fun Activities<br></div>
    <div class="excursions"><br>Shore Excursions<br></div>
  </div>
  </div>
</main>`;
