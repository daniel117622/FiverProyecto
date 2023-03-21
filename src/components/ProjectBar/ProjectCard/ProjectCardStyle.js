import styled from "@emotion/styled";

export const ProjectCardStyle = styled.div`
  background: gray;
  color: white;
  img {
    object-fit: cover;
    border-radius: 100%;
    width: 3.5em;
    height: 3.5em;
    vertical-align: super;
  }
  .projectDetail {
    p {
      display: inline-block;
      margin: 0;
    }
    .pRole{
      display: inline-block;
    }
    .rStatus{
      display: inline-block;
    }
    .postulations {
      display: inline-block;
    }
    .pStatus {
      display: inline-block;
    }
    .nPost {
      display: block;
      text-align: right;
    }
  }
  .projectText {
    display: inline-block;
    .pState {
      text-align: right;
      width: 50%;
      display: inline-block;
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
