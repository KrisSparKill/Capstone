import html from "html-literal";
import itin from "../../assets/img/Itinerary.png";
import charles from "../../assets/img/Charleston.png";
import sun from "../../assets/img/Sunshine.png";
import wea from "../../assets/img/Weather.png";
import nas from "../../assets/img/Nassau.png";
import scav from "../../assets/img/ScavengerHunt.png";
import bar from "../../assets/img/BarCrawl.png";
import pack from "../../assets/img/PackingList.png";
import trav from "../../assets/img/TravelDocuments.png";
import * as store from "../../store";

export default state => html`
  <main>
    <div class="flexContainer">
      <div class="${store.Global.selectedBrand} secondaryBkgrnd">
        <div class="activities">

          <!-- Itinerary -->
          <div class="itinerary">
            <br /><strong>Your Itinerary</strong><br />
            <br><img src=${itin} class="center" />
          </div>

          <!-- Homeport -->
          <div class="homeport">
            <a href="https://www.arrivalguides.com/en/Travelguides/North_America/United%20States/CHARLESTON"><strong>Checkout Charleston</strong><br><br><img src=${charles} class="center" /></a>
          </div>

          <!-- Ship Facts -->
          <div class="ship-facts">
            <a href="https://www.carnival.com/cruise-ships/carnival-sunshine"><strong>Carnival Sunshine</strong><br><br><img src=${sun} class="center" /></a>
          </div>

          <!-- Weather Info -->
          <div class="weather">
            <strong>
              <br />
              Weather</strong><br><br>
              <img src=${wea} class="center" />
              <div>
                The daily forecast for ${state.weather.city}. The high is ${state.weather.maxTemp} and the low is ${state.weather.minTemp}.
              </div>
            </div>

          <!-- Excursions and Port Information -->
          <div class="excursions"><br /><strong>Port Stops</strong><br />
        <a href="https://www.arrivalguides.com/en/Travelguides/Caribbean/Bahamas/NASSAU">Nassau<br><br>  <img src=${nas} class="center" /></a></div>

          <!-- Fun Activities -->
          <div class="fun">
            <br /><strong>Fun Activities</strong><br />
            <a href="Scavenger" data-navigo>Scavenger Hunt<br><br><img src=${scav} class = "center"></a>
            <br><br><a href="Barcrawl" data-navigo>Bar Crawl<br><br>  <img src=${bar} class="center" /></a>
          </div>

          <!-- Packing Lists and Other Info -->
          <div class="packing">
            <br /><strong>Packing Lists and Other Info</strong><br />
            Packing List<br><br> <img src=${pack} class = "center">
            <br><br>
            <a
              href="https://www.canva.com/design/DAF5l63-XHc/MMyuSmvZqiK0VQKuDNR7XQ/view?utm_content=DAF5l63-XHc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              >Know Before You Go<br><br><img src=${trav} class = "center"></a>
          </div>
<!-- div class="dining"><br />Dining Recommendations<br /></div -->
    </div>
  </main>
`;
