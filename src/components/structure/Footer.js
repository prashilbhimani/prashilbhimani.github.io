import React from "react";

function Footer() {
  return (
    <footer className="footer pb-3 has-background-info-dark ">
      <div className="content has-text-centered has-text-white">
      	<h1 className="title is-1 has-text-white">Get in touch</h1>
      	<p className="is-5"> Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, lets get in touch! </p>
      	<a className="button has-background-primary" href="mailto:prashilbhimani24@gmail.com"> 
            Get in touch!
         </a>
      </div>
      <div className="pt-6 pb-0 is-7 has-text-white has-text-right">
      ©Copyright Prashil Bhimani 2020.
      </div>
    </footer>
  );
}

export default Footer;
