import React from "react";
import { LoginStyle } from "./LoginStyle";

const LoginForm = (props) => {
    return (
        <LoginStyle>
            <form method="GET">
                <label>Usuario:</label>
                <input type="text" name="username" onChange={props.Change}></input>
                <br/>
                <label>Password:</label>
                <input type="text" name="password" onChange={props.Change}></input>  
                <br/>
                <button onClick={props.Submit}> Login </button>              
            </form>
        </LoginStyle>
    );
  };

export default LoginForm