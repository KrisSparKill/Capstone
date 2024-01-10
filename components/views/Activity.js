import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";
import itin from "../../assets/img/Itinerary.png";
import charles from "../../assets/img/Charleston.png";
import sun from "../../assets/img/Sunshine.jpg";
import * as store from "../../store";

export default state => html`
  <main>
    <div class="flexContainer">
      <div class="${store.Global.selectedBrand} secondaryBkgrnd">
        <div class="activities">
          <div class="itinerary">
            <br /><strong>Your Itinerary</strong><br />
            <img src=${itin} class="center" />
          </div>
          <div class="homeport">
            <br /><strong>Checkout Charleston</strong><br />
            <img src=${charles} class="center" />
          </div>
          <div class="ship-facts">
            <br /><strong>Carnival Sunshine</strong><br />
            <img src=${sun} class="center" />
          </div>
          <div class="fun">
            <br /><strong>Fun Activities</strong><br />
            <a href="Scavenger" data-navigo>Scavenger Hunt</a>
            <a href="Barcrawl" data-navigo>Bar Crawl</a>
          </div>
          <div class="excursions"><br /><strong>Port Stops</strong><br /></div>
          <div class="packing">
            <br /><strong>Packing Lists and Other Info</strong><br />
          </div>
          <div class="weather">
            <strong>
              <br />
              Weather</strong
            ><br /><br /><u>Charleston</u><br />
            The weather in ${state.weather.city} is
            ${state.weather.description}. Temperature is ${state.weather.temp}F,
            and it feels like ${state.weather.feelsLike}F.<br /><br /><u
              >Nassau</u
            ><br />
          </div>
          <!--div class="dining"><br />Dining Recommendations<br /></div-->
        </div>
      </div>
    </div>
  </main>
`;
