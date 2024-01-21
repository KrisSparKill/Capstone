import html from "html-literal";
import * as store from "../../store";

export default state => html`
  <div class="flexContainer">
    <div class="aotg secondaryBkgrnd">
      <table id="brands">
        <tr>
          <th>Contact</th>
          <th>Email</th>
          <th>Agency</th>
          <th>Abbreviation</th>
          <th>Primary Color</th>
          <th>Secondary Color</th>
        </tr>
        ${state.brands
          .map(brand => {
            return `<tr><td>${brand.contact}</td><td>${brand.email}</td><td>${brand.agency}</td><td>${brand.abbreviation}</td><td>${brand.primaryBkgrnd}</td><td>${brand.secondaryBkgrnd}</td></tr>`;
          })
          .join("")}
      </table>
    </div>
  </div>
`;
