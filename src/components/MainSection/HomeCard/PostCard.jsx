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
            Lorem ipsum dolor sit amet consectetur. Nec gravida fermentum
            faucibus arcu elit adipiscing nunc potenti. Posuere lacus tortor
            ultricies purus risus sit.
          </p>
        </div>
        <div className="sectionTwo">
          <h3>Se busca</h3>
          <ul>
            <li>
              <label class="checkContainer">
                <input type="checkbox" name="" id="" />
                <span className="checkS"></span>
              </label>
              <p>Puesto 1</p>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <a href="">Ver mas</a>
          <button>Postular</button>
        </div>
      </div>
    </PostCardStyle>
  );
};

export default PostCard;
