import React from "react";
import SkillsList from "../elements/SkillsList";
import Resume from "../../resume.json";

function Skills() {
  return (
    <section className="section has-background-info-dark " id="skills">
      <div className="container">
        <h1 className="title has-text-white ">Skills</h1>
        <div className="columns">
          <div className="column is-4">
            <div className="has-text-centered">
              <span className="icon has-text-info-light">
                <i className="fas fa-3x fa-laptop-code"></i>
              </span>
              <h2 className="title has-text-white is-5">Languages</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Languages"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>
          <div className="column is-4">
            <div className="has-text-centered">
              <span className="icon has-text-info-light">
                <i className="fas fa-3x fa-cogs"></i>
              </span>
              <h2 className="title has-text-white is-5">Cloud & Distributed Systems</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Cloud & Distributed Systems"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>
          <div className="column is-4">
            <div className="has-text-centered">
              <span className="icon has-text-info-light">
                <i className="fas fa-3x fa-laptop-code"></i>
              </span>
              <h2 className="title has-text-white is-5">Software Development</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Software Development"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Skills;
