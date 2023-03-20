import React from "react";
import { ProjectCardDetailStyle } from "./ProjectCardDetailStyle";
import UserCard from "../../../UserCard/UserCard";

const ProjectCardDetail = () => {
  return (
    <ProjectCardDetailStyle>
      <div className="pOwner">
        <UserCard />
      </div>
      <div className="pDetails">
        <div className="details1">
          <div className="detailsOne">
            <div className="objective">
              <h4>Objetivo</h4>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className="budget">
              <h4>Presupuesto</h4>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="detailsTwo">
            <div className="dStart">
              <h4>Fecha Inicio</h4>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className="dEnd">
              <h4>Fecha Entrega</h4>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
        <div className="details2">
          <h3>Se busca</h3>
          <p>Opcion</p>
          <ul>
            <li>
              <label class="checkContainer">
                <input type="checkbox" name="" id="" />
                <span className="checkS"></span>
              </label>
              <p className="roleName">Rol</p>
              <div className="rStatus">
                <p>##</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ProjectCardDetailStyle>
  );
};

export default ProjectCardDetail;
