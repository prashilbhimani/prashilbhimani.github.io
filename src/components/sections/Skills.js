import React from "react";
import SkillsList from "../elements/SkillsList";
import Resume from "../../resume.json";

function Skills() {
  let categories = [
        {
          name :"Languages", 
          icon: "fa-laptop-code"
        },
        {
          name: "Cloud & Distributed Systems", 
          icon: "fa-cogs"
          
        },
        {
          name: "Software Development",
          icon: "fa-laptop-code"
        }
    ]
  return (
    <section className="section has-background-info-dark " id="skills">
      <div className="container">
        <h1 className="title has-text-white ">Skills</h1>
        <div className="columns">
          {
            categories.map( category =>
              <div className={"column is-".concat(12/categories.length)}>
                <div className="has-text-centered">
                  <span className="icon has-text-info-light">
                    <i className={"fas fa-3x ".concat(category.icon)}></i>
                  </span>
                  <h2 className="title has-text-white is-5">{category.name}</h2>
                </div>
                <SkillsList
                  skills={Resume.skills
                  .filter(skill => skill.category === category.name)
                  .reduce((obj, item) => {
                    obj[item.name] = item.level;
                    return obj;
                  }, {})}
                />
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Skills;
