import React from "react";
import ProjectsList from "../elements/ProjectsList";

function Projects() {
  return (
    <section className="section " id="projects">
      <div className="container">
        <h1 className="title">Projects</h1>
        <ProjectsList/>
      </div>
    </section>
  );
}

export default Projects;
