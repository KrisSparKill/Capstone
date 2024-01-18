import html from "html-literal";
import aotglogo from "../assets/img/AotGLogo.png";
// import pydlogo from "../assets/img/pydlogo";
// import hatcologo from "../assets/img/hatcologo";

export default () => html`
  <header class="header">
    <img src=${aotglogo} class="center" id="logo" />
  </header>
`;
