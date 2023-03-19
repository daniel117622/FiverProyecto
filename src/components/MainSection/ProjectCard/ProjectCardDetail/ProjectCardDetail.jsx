import React from "react";
import { ProjectCardDetailStyle } from "./ProjectCardDetailStyle";

const ProjectCardDetail = () => {
  return (
    <ProjectCardDetailStyle>
      <div className="pOwner"></div>
      <div className="pDetails">
        <div className="details1">
          <div className="objective">
            <h4>Objetivo</h4>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="dStart">
            <h4>Fecha Inicio</h4>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="budget">
            <h4>Presupuesto</h4>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="dEnd">
            <h4>Fecha Entrega</h4>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="pDetails2">
          <h3>Se busca</h3>
          <p>Opcion</p>
          <ul>
            <li>
              <input type="checkbox" name="" id="" />
              <p>Puesto</p>
            </li>
          </ul>
        </div>
      </div>
    </ProjectCardDetailStyle>
  );
};

export default ProjectCardDetail;
