import html from "html-literal";
import aotglogo from "../assets/img/AotGLogo.png";
import hatcologo from "../assets/img/hatcoLogo.png";
import pydlogo from "../assets/img/pydLogo.png";

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
