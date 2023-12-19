import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";

export default () => html`
  <main>
    <div class="flexContainer">
      <img src=${mtnTrees} class="trees" />
      <div class="orangeBkgrnd">
        <h3>About Adventures on the Go</h3>
        <br />
        <br />
        <p>
          Adventures on the Go is trying to bring a fresh new way to explore and
          learn about various destinations around the world. We are striving to
          bridge the communication gap that exists between clients and their
          travel advisors. Many times we understand that clients don't always
          inform their travel advisors of plans or they don't want to ask for
          recommendations of things that are available to do, because they have
          more flexible plans and prefer to travel by the seat-of-their-pants
          vs. a planned itinerary. This allows for spontaneity and the ability
          to fill in planned or un-planned downtime.
        </p>
      </div>
    </div>
  </main>
`;
