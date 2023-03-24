import styled from '@emotion/styled';

export const SocialCardStyle = styled.div`
background: gray;
color: white;
width: 20em;
height: 4.2em;
border-radius: 15px;
position: relative;
img {
  vertical-align: top;
  object-fit: cover;
  border-radius: 100%;
  width: 3.5em;
  height: 3.5em;
  margin: 5px;
}
.socialText {
  width: 77%;
  height: 50%;
  display: inline-block;
  h3 {
    font-size: 20px;
    margin: 0;
    display: inline-block;
  }
  .filterSection{
    background:red;
    margin:0;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
}
`;
