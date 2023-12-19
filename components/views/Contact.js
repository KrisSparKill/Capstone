import html from "html-literal";

export default () => html`
  <h1>Get in Touch</h1>
  <div class="form">
    <form action="https://formspree.io/f/xeqbypkl" method="POST">
      <label
        >Name:<input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
        /> </label
      ><br /><br />
      <label
        >Email:<input
          type="email"
          name="email"
          id="email"
          placeholder="you@somewhere.com"
          required
        /> </label
      ><br /><br />
      <label
        >Leave us a Message:<br /><textarea name="message"></textarea> </label
      ><br />
      <button type="submit" value="Submit">Submit</button>
    </form>
  </div>
  <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
`;
