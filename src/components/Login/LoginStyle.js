import styled from '@emotion/styled';

export const LoginStyle = styled.div`
 

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 230px; 
  padding: 70px; 
  border: 2px solid #ccc; 
  border-radius: 10px; 
  width: 400px; 
  position: absolute;
  left: 0;
  top: 0;
}

label {
  font-size: 36px; 
  margin-bottom: 10px; 
}

input {
  padding: 20px; 
  border-radius: 10px; 
  border: 2px solid #ccc; 
  margin-bottom: 30px; 
  font-size: 16px; 
  width: 100%;
}

button {
  background-color: #553c9a;
  color: white;
  padding: 20px; 
  border: none;
  border-radius: 10px; 
  cursor: pointer;
  font-size: 24px; 
  width: 100%;
}

button:hover {
  background-color: #3e8e41;
}
`;
