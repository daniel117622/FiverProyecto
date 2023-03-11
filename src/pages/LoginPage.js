import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
  const [datos, setdatos] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setdatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = document.querySelector("form");
    var f1data = new FormData(formData);
    console.log(f1data.getAll("username"));
    const response = await fetch("http://localhost:5000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        username: formData.username.value,
        password: formData.password.value,
      },
      mode: "cors",
      method: "POST",
    })
      .then((r) => {
        r.json().then((jData) => {
          if (jData.msg == "Aceptado") {
            console.log("Aceptado");
          } else {
            console.log("Rechazado");
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <LoginForm Change={handleChange} Submit={handleSubmit}/>
  );
}

export default LoginPage;
