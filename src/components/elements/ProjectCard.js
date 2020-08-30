import React from "react";
import Resume from "../../resume.json";

function ProjectCard(project) {
  return (
    <div className="tile is-child px-2 py-2" key={index} >
      <div className="card box px-0 py-0 is-info" style={{height: "400px"}}>
        <header className="card-header" style={{height: "50px"}}>
          <p className="card-header-title">
            {project.name}
          </p>
        </header>
        <div className="card-content">
          {project.description.join(' ').slice(0,350).concat("...")}
        </div>
      </div>
    </div>
  )
}

export default ProjectsList;