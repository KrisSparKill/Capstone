import html from "html-literal";
import aotglogo from "../assets/img/AotGLogo.png";
import pydlogo from "../assets/img/pydlogo.png";
import hatcologo from "../assets/img/hatcologo.png";

export default (brand = "aotg") => {
  const logoMap = {
    aotg: `${aotglogo}`,
    pyd: `${pydlogo}`,
    hatco: `${hatcologo}`
  };

  const logo = logoMap[brand] || aotglogo;

  return html`
    <header class="header">
      <img src=${logo} class="center" id="logo" />
    </header>
  `;
};
