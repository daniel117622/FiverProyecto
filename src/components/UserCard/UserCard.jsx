import React from "react";
import { UserCardStyle } from "./UserCardStyle";

const UserCard = () => {
  return (
    <UserCardStyle>
      <img src="" alt="" className="userPic" />
      <div className="userFilter"></div>
      <div className="userName">
        <h3>Nombre usuario</h3>
      </div>
      <div className="userDescription">
        <h4>Descripción</h4>
        <h3>
          Lorem ipsum dolor sit amet consectetur. In ullamcorper iaculis vitae
          morbi mauris id.
        </h3>
      </div>
      <a href="">Ver perfil</a>
    </UserCardStyle>
  );
};

export default UserCard;
