import React from "react";
import ProjectModal from './ProjectModal'

function ProjectTile(project) {
  const projectId = project.name.replace(/\s+/g, '')
  function openModal(id) {
    var modal = document.getElementById(id);
    modal.classList.add("is-active")
  }
  function techDisplay(tech) {
    return(
      <span class="tag is-light mx-1">{tech}</span>
    )
  }
  return (
    <div className="tile is-child px-2 py-2" >
      <div className="card px-3 py-2 has-background-white" style = {{height: "300px", display: "flex", flexDirection: "column"}}>
        <div className="card-header has-background-white" style={{boxShadow: "0 0 0 0"}}>
          <h2 className="subtitle is-4">{project.name}</h2>
        </div>
        <div className="card-content" style={{ flex: "1 0 auto"}}>
          <p>Technologies Used</p>
          {project.technology.map((tech) => techDisplay(tech))}
        </div>
          <button 
            className="button modal-button has-background-primary card-footer" 
            onClick={(e) => openModal(projectId)}
            style = {{ borderTop: "0" , flexShrink: "0"}}
            > 
            Learn More
          </button>
      </div>
      {ProjectModal(project)}
    </div>
    
  )
}

export default ProjectTile;

