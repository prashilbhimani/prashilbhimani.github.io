import React from "react";
import Resume from "../../resume.json";

function ProjectsList() {
  const projectList = Resume.projects
  const sizePerRow = 3; 
  const projectRows = projectList.reduce((acc, curr, i) => {
    if ( !(i % sizePerRow)  ) {    // if index is 0 or can be divided by the `size`...
      acc.push(projectList.slice(i, i + sizePerRow));   // ..push a chunk of the original array to the accumulator
    }
    return acc;
    }, []);
  return (
    <div>
      {
        projectRows.map((rows, index) => {
          return (
            <div className="tile is-ancestor px-1" key={index}>
              <div className= "tile is-parent" >
                {buildProjectRow(rows)}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

function buildProjectRow(rows) {
  return (
    rows.map((project, index) => {
      return (
        <div className="tile is-child px-2 py-2" key={index} >
          <div className="card box px-0 py-0 is-info" style={{height: "400px"}}>
            <header className="card-header">
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
    })
  )
}

export default ProjectsList;