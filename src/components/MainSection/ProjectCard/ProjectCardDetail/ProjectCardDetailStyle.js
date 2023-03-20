import styled from "@emotion/styled";

export const ProjectCardDetailStyle = styled.div`
  .pOwner {
    width: 30%;
    display: inline-block;
    vertical-align: top;
  }
  .pDetails {
    display: inline-block;
    margin-left: 1.5em;
  }
  .details2 {
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
      .rStatus {
        display: inline-block;
      }
    }
  }
  .detailsOne {
    display: inline-block;
    margin-right: 7em;
  }
  .detailsTwo {
    display: inline-block;
  }
`;
