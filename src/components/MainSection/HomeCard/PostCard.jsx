import React from "react";
import { PostCardStyle } from "./PostCardStyle";

const PostCard = () => {
  return (
    <PostCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="postText">
        <div className="sectionOne">
          <h1>Titulo proyecto</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="">Ver mas</a>
        </div>
        <div className="sectionTwo">
          <h3>Se busca</h3>
          <p>Opcion</p>

          <input type="checkbox" name="" id="" />
          <button>Postular</button>
        </div>
      </div>
    </PostCardStyle>
  );
};

export default PostCard;
