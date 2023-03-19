import React from "react";
import ProjectCardDetail from "./ProjectCardDetail/ProjectCardDetail";
import { ProjectCardStyle } from "./ProjectCardStyle";

const ProjectCard1 = () => {
  return (
    <ProjectCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="postText">
        <div className="sectionOne">
          <h2>Titulo proyecto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="sectionTwo">
          <h3>Colaboradores</h3>
          <ul>
            <li>
              <p className="roleName">Rol</p>
              <p className="colaborator">Colaborador</p>
            </li>
          </ul>
        </div>
        <a href="">Ver mas</a>
        <div className="detailSection">
          <ProjectCardDetail />
        </div>
      </div>
    </ProjectCardStyle>
  );
};

const ProjectCard2 = () => {
  return (
    <ProjectCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="postText">
        <div className="sectionOne">
          <h2>Titulo proyecto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="sectionTwo">
          <h3>Postulado a:</h3>
          <ul>
            <li>
              <input type="checkbox" name="" id="" className="rChoice" />
              <p className="roleName">Rol</p>
              <div className="rStatus">
                <p>##</p>
              </div>
            </li>
          </ul>
        </div>
        <a href="">Ver mas</a>
        <div className="detailSection">
          <ProjectCardDetail />
        </div>
      </div>
    </ProjectCardStyle>
  );
};

export { ProjectCard1, ProjectCard2 };
