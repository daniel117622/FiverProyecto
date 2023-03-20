import styled from "@emotion/styled";

export const PostCardStyle = styled.div`
  font-family: Arial;
  margin-top: 15px;
  padding-bottom: 1em;
  background: #323030;
  border-radius: 10px;
  overflow: hidden;
  width: 50em;
  img {
    width: 100%;
    height: 17em;
    object-fit: cover;
  }
  .postText {
    margin-top: 15px;
    background: #323030;
    color: white;
    .sectionOne {
      margin-left: 10px;
      display: inline-block;
      width: 40%;
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 16px;
      }
    }
    .sectionTwo {
      margin-left: 4em;
      display: inline-block;
      vertical-align: top;
      margin-top: 1em;
      h3 {
        font-size: 24px;
        margin-bottom: 18px;
      }
      li {
        list-style: none;
        p {
          display: inline-block;
          margin-left: 30px;
          font-size: 16px;
        }
        .checkContainer {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkS {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          border: solid white 1px;
        }
        .checkS:after {
          content: "";
          position: absolute;
          display: none;
        }

        .checkContainer input:checked ~ .checkS:after {
          display: block;
        }

        .checkContainer .checkS:after {
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
    .buttons {
      text-align: right;
      margin-right: 10px;
      a {
        color: white;
        vertical-align: middle;
      }
      button {
        font-size: 20px;
        border: none;
        margin-left: 20px;
        background: blueviolet;
        text-decoration: none;
        color: white;
        border-radius: 7px;
        font-size: 20px;
        padding: 4px 20px;
      }
    }
  }
`;
