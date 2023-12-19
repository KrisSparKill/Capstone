import html from "html-literal";
import logo from "../assets/img/AotGLogo.png";

export default () => html`
  <header class="header">
    <img src=${logo} height="100px" width="100px" class="logo" id="main" />
  </header>
`;
