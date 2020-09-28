import React from "react";

function ProjectModal(project) {
  const projectId = project.name.replace(/\s+/g, '')
  function closeModal(id){
    var modal = document.getElementById(id);
    modal.classList.remove("is-active")
  }
  return (
    <div id={projectId} className="modal is-clipped" key={project.name}>
      <div className="modal-background" onClick={(e) => closeModal(projectId)}></div>
      <div className="modal-content">
        <div className="card has-background-white ">
          <header className="card-header has-background-primary" style={{height: "80px" }}>
            <p className="card-header-title">
              {project.name}
            </p>
          </header>
          <div style={{height: "450px"}} className="card-content is-clipped">
            {project.description.join(" ")}
            <p className="pt-5">Technologies Used</p>
            {project.technology.map((tech) => <a class="tag is-primary-light mx-1" href={"#".concat(tech)}>{tech}</a>)}
          </div>
        </div>
      </div>
      <button class="modal-close is-large" onClick={(e) => closeModal(projectId)}></button>
    </div>
  )
}

export default ProjectModal;    