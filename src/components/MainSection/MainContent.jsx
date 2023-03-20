import React from "react";
import { MainSectionStyle } from "./MainSectionStyle";
import PostCard from "./HomeCard/PostCard";
import { ProjectCard1,ProjectCard2} from "./ProjectCard/ProjectCard";

const MainContent = () => {
  return (
    <MainSectionStyle>
      <PostCard />
      {/* <ProjectCard1 /> */}
      <ProjectCard2 />
    </MainSectionStyle>
  );
};

export default MainContent;
