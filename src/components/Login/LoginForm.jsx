import React from "react";

function LoginForm()
{
    const [datos, setdatos] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {

        setdatos({...datos,[e.target.name] : e.target.value});
        console.log(datos);
    }

    const handleSubmit = (e) => 
    {
        if (datos.username === "daniel117622" && datos.password === "")
        {
            alert(1);
        }
    }

    return(
        <div>
            <form method="GET">
                <label>Usuario:</label>
                <input type="text" name="username" onChange={handleChange}></input>
                <br/>
                <label>Password:</label>
                <input type="text" name="password" onChange={handleChange}></input>  
                <br/>
                <button onClick={handleSubmit}> Login </button>              
            </form>
        </div>  
    )
}

export default LoginForm