import React from "react";
import { ProjectCardStyle } from "./ProjectCardStyle";

const ProjectCard1 = () => {
  return (
    <ProjectCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="projectText">
        <h3>Titulo proyecto</h3>
        <div className="projectDetail">
          <div className="postulations">
            <p>Postulados:</p>
            <p>##</p>
          </div>
          <div className="pStatus">
            <p>Estatus:</p>
            <p>##</p>
          </div>
          <p className="nPost">#/#</p>
        </div>
      </div>
    </ProjectCardStyle>
  );
};
const ProjectCard2 = () => {
  return (
    <ProjectCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="projectText">
        <h3>Titulo proyecto</h3>
        <h4 className="pState">Estatus</h4>
        <div className="projectDetail">
          <div className="pRole">
            <p>Rol:</p>
            <p>Nombre</p>
          </div>
          <div className="rStatus">
            <p>Estado:</p>
            <p>##</p>
          </div>
        </div>
      </div>
    </ProjectCardStyle>
  );
};

export { ProjectCard1, ProjectCard2 };
