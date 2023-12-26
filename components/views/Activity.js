import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";
import itin from "../../assets/img/Itinerary.png";
import charles from "../../assets/img/Charleston.png";
import sun from "../../assets/img/Sunshine.jpg";

export default state => html`
  <main>
    <div class="flexContainer">
      <img src=${mtnTrees} class="trees" />
      <div class="orangeBkgrnd">
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
          <div class="fun"><br /><strong>Fun Activities</strong><br /></div>
          <div class="excursions">
            <br /><strong>Shore Excursions</strong><br />
          </div>
          <div class="packing"><br /><strong>Packing List</strong><br /></div>
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
/* <button id="mybutton">
<div id="myPopup" class="popup">
              <div class="popup-content">
                <h3>Your Itinerary</h3>

                <button id="closePopup">
                  Close
                </button>
              </div>
            </div> */
