import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>
      {/*
        This is the Front page section which includes the names and the description
      */} 
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light is-size-3">I am</p>
          <h1 className="title is-size-1 pb-5">{Resume.basics.name}</h1>
          <div className="subtitle is-size-3">
            {
              //This is a for loop over the labels 
              Resume.basics.label.map((title, i) => {return <span key={i} className="rotatingText-adjective" >       - {title} </span>})
            } 
              
          </div>
        </div>
      </div>
      {/*
        This is the bottom part of the hero component. This has icons for each profile you have linked
      */}
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium has-text-white">
                    <i className={value.x_icon}></i>
                  </span>
                </a>
              </div>
            );
          })}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
