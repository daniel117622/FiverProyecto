import React, { useState } from "react";
import {Cookies, useCookies} from "react-cookie"
import {useNavigate} from "react-router-dom"

function LoginPage()
{
    const [datos, setdatos] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        console.log(e.target.value)
        setdatos({...datos,[e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        const response = await fetch(
            "http://localhost:5000/login", {method: "POST"}
        ).then( (r) => {
            r.json().then((jData) => {
                if (jData.msg == "Aceptado")
                {
                    console.log("Aceptado")
                }
                else
                {
                    console.log("Rechazado")
                }
            })

        }).catch(e => {console.log(e)})

    }

    return (
        <div>
            <form>
                <label>Usuario:</label>
                <input type="text" name="username" onChange={handleChange}></input>
                <br/>
                <label>Password:</label>
                <input type="text" name="password" onChange={handleChange}></input>  
                <br/>
                <button onClick={handleSubmit}> Login </button>              
            </form>
        </div>
    );
}

export default LoginPage;