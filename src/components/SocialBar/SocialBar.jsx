import React from "react";
import { SocialBarStyle } from "./SocialBarStyle";
import SocialCard from "./SocialCard/SocialCard";

const SocialBar = () => {
  return (
    <SocialBarStyle>
      <div className="titleSection">
        <h2>Usuarios destacados</h2>
      </div>
      <div className="cardSection">
        <h5>Roles</h5>
        <div className="cards">
          <SocialCard />
        </div>
      </div>
    </SocialBarStyle>
  );
};

export default SocialBar;
