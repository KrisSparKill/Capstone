import html from "html-literal";
import itin from "../../assets/img/Itinerary.png";
import charles from "../../assets/img/Charleston.png";
import sun from "../../assets/img/Sunshine.jpg";
import kbyg from "../../assets/img/Ckbyg.png";
import * as store from "../../store";

export default state => html`
  <main>
    <div class="flexContainer">
      <div class="${store.Global.selectedBrand} secondaryBkgrnd">
        <div class="activities">
          <!-- Itinerary -->
          <div class="itinerary">
            <br /><strong>Your Itinerary</strong><br />
            <img src=${itin} class="center" />
          </div>

          <!-- Homeport -->
          <div class="homeport">
            <br /><strong>Checkout Charleston</strong><br />
            <img src=${charles} class="center" />
          </div>

          <!-- Ship Facts -->
          <div class="ship-facts">
            <br /><strong>Carnival Sunshine</strong><br />
            <img src=${sun} class="center" />
          </div>

          <!-- Fun Activities -->
          <div class="fun">
            <br /><strong>Fun Activities</strong><br />
            <a href="Scavenger" data-navigo>Scavenger Hunt</a>
            <a href="Barcrawl" data-navigo>Bar Crawl</a>
          </div>

          <!-- Excursions and Port Information -->
          <div class="excursions"><br /><strong>Port Stops</strong><br /></div>

          <!-- Packing Lists and Other Info -->
          <div class="packing">
            <br /><strong>Packing Lists and Other Info</strong><br />
            <a
              href="https://www.canva.com/design/DAF5l63-XHc/MMyuSmvZqiK0VQKuDNR7XQ/view?utm_content=DAF5l63-XHc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              ><img width="50%" height="50%" src=${kbyg}
            /></a>
          </div>
<!-- div class="dining"><br />Dining Recommendations<br /></div -->
          <!-- Weather Info -->
          <div class="weather">
            <strong>
              <br />
              Weather</strong>

${state.weathermap};

      </div>
    </div>
  </main>
`;
