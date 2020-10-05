import React from "react";
import ProjectModal from './ProjectModal'

function ProjectTile(project) {
  const projectId = project.name.replace(/\s+/g, '')
  function openModal(id) {
    var modal = document.getElementById(id);
    modal.classList.add("is-active")
  }

  return (
    <div className="tile is-child px-2 py-2" >
      <div className="card px-3 py-2 has-background-white" style = {{height: "320px", display: "flex", flexDirection: "column"}}>
        <div className="card-header has-background-white" style={{boxShadow: "0 0 0 0"}}>
          <h2 className="subtitle is-4">{project.name}</h2>
        </div>
        <div className="card-content" style={{ flex: "1 0 auto"}}>
          {project.one_line}
        </div>
        <p className="pb-4">
          {project.technology.map((tech) => <a class="tag is-family-code  is-primary-light px-2 mx-1 " href={"#".concat(tech)}>{tech}</a>)}
        </p>
        <div className="card-footer" style = {{ borderTop: "0" , flexShrink: "0"}}>
          <button 
            className="button modal-button has-background-primary card-footer" 
            onClick={(e) => openModal(projectId)}
            > 
            Learn More
          </button>
        </div>
      </div>
      {ProjectModal(project)}
    </div>
    
  )
}

export default ProjectTile;

