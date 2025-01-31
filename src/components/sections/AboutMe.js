import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section has-background-info-dark" id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image is-180x180 container ">
          <img
            width="180px"
            
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded "
            onError={(e)=>{e.target.onerror = null; e.target.src=Resume.basics.x_pictureFallback}}
          />
        </figure>
        <p className="title pt-6 is-3 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <p className="subtitle is-4 py-6 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
