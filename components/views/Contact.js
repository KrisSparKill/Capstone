import html from "html-literal";
import mtnTrees from "../../assets/img/MountainsTrees.png";

export default () => html`
  <div class="flexContainer">
    <img src=${mtnTrees} class="trees" />
    <div class="aotg secondaryBkgrnd">
      <h1>Get in Touch</h1>
      <div class="form">
        <form action="https://formspree.io/f/xeqbypkl" method="POST">
          <label
            >Name:<input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            /> </label
          ><br /><br />
          <label
            >Email:<input
              type="email"
              name="email"
              placeholder="you@somewhere.com"
              required
            /> </label
          ><br /><br />
          <label
            >Leave us a Message:<br /><textarea
              class="message"
              name="message"
            ></textarea> </label
          ><br />
          <button class="formSub" type="submit" value="Submit">Submit</button>
        </form>
      </div>
      <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
    </div>
  </div>
`;
