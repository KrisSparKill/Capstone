import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";

export default () => html`
  <main>
    <div class="flexContainer">
      <img src=${mtnTrees} class="trees" />
      <div class="aotg secondaryBkgrnd">
        <section id="join">
          <form id ="newBrand" method="POST" action="">
            <h2>Join Adventures On The Go</h2>
            <p>Are you looking to expand your agency's interaction with your clients?
              We offer the ability to have your clients use our co-branded app. Register below and we will be in touch!</p>
              <div>
              <label for="contact">Contact Name:</label>
              <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Enter Contact Person"
              required
              />
            </div>
            <div>
              <label for="email">Contact Email:</label>
              <input
              type="text"
              name="email"
              id="email"
              placeholder="hello@aotg.com"
              required
              />
            </div>
            <div>
              <label for="agency">Agency Name:</label>
              <input
              type="text"
              name="agency"
              id="name"
              placeholder="Enter Agency Name"
              required
              />
            </div>
            <div>
              <label for="abbreviation">Agency Abbreviation:</label>
              <input
              type="text"
              name="abbreviation"
              id="class"
              placeholder="Example: AOTG"
              required
              />
            </div>
            <div>
              <label for="primaryBkgrnd">Primary Background Color:</label>
              <input
              type="text"
              name="primaryBkgrnd"
              id="primaryBkgrnd"
              placeholder="Enter Hex or RBG color code"
              required
              />
            </div>
            <div>
              <label for="secondaryBkgrnd">Secondary Background Color:</label>
              <input
              type="text"
              name="secondaryBkgrnd"
              id="secondaryBkgrnd"
              placeholder="Enter Hex or RBG color code"
              required
              />
            </div>
            <input type="submit" name="submit" value="Submit Brand" id="submit"/>
</form>
      </div>
    </div>
  </main>
`;
