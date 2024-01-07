import html from "html-literal";

export default state => html`
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
        return `<tr><td>${brand.contact}</td><td>${brand.email}</td><td>${brand.agency}</td><td>${brand.primaryColor}</td><td>${brand.secondaryColor}</td></tr>`;
      })
      .join("")}
  </table>
`;
