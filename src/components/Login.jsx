import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconwhite from "../assets/iconwhite.png";

//utils
// import createLogin from "../utils/api";
import { AuthContext } from "../utils/AuthContext";

//Styled components
import { LoginContainer, BlueBox, FormBox } from "../styles/login";

//COMPONENT
export default function Login() {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
  });
  //Token implementation
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.correo || !formData.contrasena) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const userData = await handleLogin(formData);
      console.log(
        "INICIO DE SESION EXITOSO",
        userData,
        userData.rol.descripcionrol
      );

      const rol = userData.rol.descripcionrol;

      if (rol === "ADMIN") {
        navigate("/adminview/inicio");
      } else if (rol === "ASISTENTE") {
        navigate("/asistantview");
      } else if (rol === "ALUMNO") {
        navigate("/alumnoview");
      } else {
        console.log("No tienes Acceso a ninguna Ruta");
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      alert("Verifica los datos de inicio de sesión");
    }
  };

  return (
    <LoginContainer>
      <BlueBox>
        <h3>Comienza tu aventutra con nosotros</h3>
        <img src={iconwhite} alt="iconwhite" />
        <Link to="/">
          <h3>Atras</h3>
        </Link>
      </BlueBox>

      <FormBox>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="correo"
            placeholder="Escribe tu correo"
            value={formData.correo}
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            placeholder="Escribe tu contraseña"
            value={formData.contrasena}
            onChange={handleChange}
          />
          <Link>Restablecer Contraseña</Link>
          <button type="submit">Acceder</button>
        </form>
      </FormBox>
    </LoginContainer>
  );
}
