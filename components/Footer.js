import html from "html-literal";
import * as store from "../store";

export default state => {
  const brand = store.Global.nonThemedViews.includes(state.view)
    ? "aotg"
    : store.Global.selectedBrand;
  return html`
    <footer class="${brand} secondaryBkgrnd">
      <br />
      <br />
      <a href="/Home" data-navigo>Home</a> |
      <a href="/About" data-navigo>About</a> |
      <a href="/Contact" data-navigo>Contact</a> |
      <a href="/Advisors" data-navigo> Travel Advisors</a>
      <br />
      <br />
      &copy; Adventures on the Go<br />
      Powered by The Travel Adventure Team LLC 2023
    </footer>
  `;
};
