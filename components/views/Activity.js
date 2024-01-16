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
            <strong><br />5-Day Weather Forecast</strong><br><br>
            <img src=${wea} class="center" />
            <div>
              The forecast every 3 hours for The ${state.weather.city || "N/A"}:
              ${
                state.weather.forecast
                  ? state.weather.forecast
                      .map(
                        day => `
              <div>
                Date/Time: ${day.dateTime}
                Min Temp: ${day.minTemp} °F
                Max Temp: ${day.maxTemp} °F
              </div>`
                      )
                      .join("")
                  : "N/A"
              }
            </div>

          </div>

          <!-- Excursions and Port Information -->
          <div class="excursions"><br /><strong>Port Stops</strong><br />
            <a href="https://www.arrivalguides.com/en/Travelguides/Caribbean/Bahamas/NASSAU">Nassau<br><br>  <img src=${nas} class="center" /></a>
          </div>

          <!-- Fun Activities -->
          <div class="fun">
            <br /><strong>Fun Activities</strong><br />
            <a href="Scavenger" data-navigo>Scavenger Hunt<br><br><img src=${scav} class = "center"></a>
            <br><br><a href="Barcrawl" data-navigo>Bar Crawl<br><br>  <img src=${bar} class="center" /></a>
          </div>

          <!-- Packing Lists and Other Info -->
          <div class="packing">
            <br /><strong>Packing Lists and Other Info</strong><br /><a href="https://www.canva.com/design/DAF5mDoLimU/1gaZHDwG2YG3pCfWW1LkiQ/view?utm_content=DAF5mDoLimU&utm_campaign=designshare&utm_medium=link&utm_source=editor">
            Packing List<br><br> <img src=${pack} class = "center"></a>
            <br><br>
            <a
              href="https://www.canva.com/design/DAF5l63-XHc/MMyuSmvZqiK0VQKuDNR7XQ/view?utm_content=DAF5l63-XHc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              >Know Before You Go<br><br><img src=${trav} class = "center"></a>
          </div>

    </div>
  </main>
`;
