import React from "react";
import styled from "@emotion/styled";

//import LoginPage from "../../../FiverProyecto/src/pages/LoginPage";
//import Carrousel from "../components/Carrousel/Carrousel";
//import MainContent from "../components/MainSection/MainContent";
import ProjectBar from "../components/ProjectBar/ProjectBar";


const TituloStyle = styled.div`

    font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: te   xt;
  -webkit-background-clip: text;
  line-height: 0.9; 
}`;






function MainPage() {
    return (
        <div>
            <TituloStyle/>
            <ProjectBar/>
        </div>
    );
}

export default MainPage;