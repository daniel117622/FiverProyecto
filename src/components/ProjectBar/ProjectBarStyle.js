import styled from "@emotion/styled";

export const ProjectBarStyle = styled.div`
  background: black;
  width: min-content;
  color: white;
  .profilePic{
    text-align:center;
  }
  .userPic {
    object-fit: cover;
    width: 15em;
    height: 15em;
    border: black solid 4px;
    border-radius: 7px;
    margin-top: 1em;
  }
  .projectSection1 {
    img {
      vertical-align: super;
    }
    .projectText {
      vertical-align: top;
      margin-top: 5px;
    }
  }
  .projectSection2 {
    img {
      vertical-align: super;
    }
    .projectText {
      vertical-align: top;
      margin-top: 5px;
    }
  }
  .barContent {
    h2 {
      font-size: 24px;
      margin: 0;
    }
  }
`;
