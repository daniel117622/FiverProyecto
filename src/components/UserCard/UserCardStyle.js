import styled from "@emotion/styled";

export const UserCardStyle = styled.div`
  background: purple;
  padding: 10px;
  .userFilter{
    display: inline-block;
    margin: 0;
    vertical-align: top;
    margin-left: 5px;
  }
  .userPic {
    width: 8em;
    height: 8em;
    border: solid 3px black;
    border-radius: 10px;
    overflow: hidden;
    display: inline-block;
  }
  .userName{
    text-align: center;
    margin-top: 10px;
  }
  .userDescription{
    margin-top: 20px;
    h4{
      font-size: 16px;
      font-weight: bold;
    }
    h3{
      font-size: 16px;
    }
  }
  a{
    color: white;
    text-align: right;
    display: block;
    margin-right: 10px;
  }
`;
