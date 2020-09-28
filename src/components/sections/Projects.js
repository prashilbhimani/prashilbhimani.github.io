import React from "react";
import ProjectTile from "../elements/ProjectTile";
import Resume from "../../resume.json";

function emptyTile(){
	return (<div className="tile is-child px-2 py-2"/>)
}

function populateProjectCardRow(rowNumber) {
	const projectList = Resume.projects;
	const numOfProjectPerRow = 4;
	const projectRow = projectList.slice(numOfProjectPerRow * rowNumber, numOfProjectPerRow * (rowNumber+1));
	const extraRows =[];
	if(projectRow.length < 4)
	{	
		var i;
		for (i = projectRow.length; i < 4; i++) {
  			extraRows.push(emptyTile())
		}
	}
	return (
		<div className="tile is-ancestor px-1">
			<div className= "tile is-parent" >
				{
					projectRow.map((project) => ProjectTile(project))
				}
				{extraRows}
			</div>
		</div>

	)
}

function Projects() {
  return (
    <section className="section has-background-white" id="projects">
      <div className="container">
        <h1 className="title">Some of my favorite projects</h1>
        {populateProjectCardRow(0)}
        {populateProjectCardRow(1)}
      </div>
    </section>
  );
}

export default Projects;
