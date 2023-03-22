import styled from "@emotion/styled";

export const ProjectCardStyle = styled.div`
  background: gray;
  color: white;
  width: 20em;
  height: 4.2em;
  border-radius: 15px;
  position: relative;
  img {
    object-fit: cover;
    border-radius: 100%;
    width: 3.5em;
    height: 3.5em;
    margin: 5px;
  }
  .projectDetail {
    width: max-content;
    p {
      display: inline-block;
      margin: 0;
    }
    .pRole{
      display: inline-block;
      margin:0;
    }
    .rStatus{
      display: inline-block;
      margin:0;
      margin-left: 20px;
    }
    .postulations {
      display: inline-block;
      margin:0;
    }
    .pStatus {
      display: inline-block;
      margin:0;
      margin-left: 20px;
    }
    .nPost {
      display: block;
      text-align: right;
      margin:0;
      position: absolute;
      right: 5%;
      bottom: 0;
    }
  }
  .projectText {
    display: inline-block;
    .pState {
      text-align: right;
      display: inline-block;
      font-size:14px;
      position: absolute;
      top: 15%;
      right: 5%;
    }
    width: 50%;
    h3 {
      font-size: 20px;
      margin: 0;
      display: inline-block;
    }
    p {
      font-size: 16px;
    }
  }
`;
