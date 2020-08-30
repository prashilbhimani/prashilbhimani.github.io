import React from "react";
import ProjectCard from "../elements/ProjectCard";
import Resume from "../../resume.json";

function Projects() {
  const projectList = Resume.projects
  const sizePerRow = 3; 
  const projectRows = projectList.reduce(
  	(acc, curr, i) => {
    	if (!(i % sizePerRow)) {    // if index is 0 or can be divided by the `size`...
      		acc.push(projectList.slice(i, i + sizePerRow));   // ..push a chunk of the original array to the accumulator
    	}
    	return acc;
    }, []
   );

  return (
    <section className="section " id="projects">
      <div className="container">
        <h1 className="title">Projects</h1>
        	<div className="tile is-ancestor px-1" key={index}>
              <div className= "tile is-parent" >
                {(rows)}
              </div>
            </div>
      </div>
    </section>
  );
}

export default Projects;
