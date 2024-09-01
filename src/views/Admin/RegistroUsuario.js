import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../utils/AuthContext";
//Styles
import {
  RegistroUsuarioCont,
  RegistroUsuarioForm,
} from "../../styles/registrousuario";

const API_URL = `http://localhost:4000/api/v2`;

//COMPONENT
export default function RegistroUsuario() {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [formDataSet, setFormData] = useState({
    nombres: "",
    apellidos: "",
    fechanacimento: "",
    fkgenerousuario: "",
    telefono: "",
    direccion: "",
    correo: "",
    contrasena: "",
    rolselected: "",
  });
  const [roles, setRoles] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({
    nombres: "",
    apellidos: "",
    fechanacimiento: "",
    fkgenerousuario: "",
    telefono: "",
    direccion: "",
    correo: "",
    contrasena: "",
    rolselected: "",
  });

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const responseRoles = await axios.get(`${API_URL}/roles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseGeneros = await axios.get(`${API_URL}/generos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRoles(responseRoles.data);
        setGeneros(responseGeneros.data);
      } catch (error) {
        console.log("Error fetching roles:", error);
      }
    };

    if (isLoggedIn && token) {
      fetchRoles();
    } else {
      console.log("User is not authorized");
    }

    // fetchRoles();
  }, [isLoggedIn, token]);

  const handleInputChange = (e) => {
    setFormData({ ...formDataSet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      nombres,
      apellidos,
      fechanacimiento,
      fkgenerousuario,
      telefono,
      direccion,
      correo,
      contrasena,
      rolselected,
    } = formDataSet;
    const newErrors = {};
    if (!nombres) newErrors.nombres = "El nombre es requerido";
    if (!apellidos) newErrors.apellidos = "El apellido es requerido";
    if (!fechanacimiento)
      newErrors.fechanacimiento = "La fecha de nacimiento es requerida";
    if (!fkgenerousuario) newErrors.fkgenerousuario = "El género es requerido";
    if (!telefono) newErrors.telefono = "El teléfono es requerido";
    if (!direccion) newErrors.direccion = "La dirección es requerida";
    if (!correo) newErrors.correo = "El correo es requerido";
    if (!contrasena) newErrors.contrasena = "La contraseña es requerida";
    if (!rolselected) newErrors.rolselected = "El rol es requerido";

    //VALIDATORS
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
    if (nombres && !namePattern.test(nombres))
      newErrors.nombres = "El nombre no es válido";

    const lastNamePattern = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
    if (apellidos && !lastNamePattern.test(apellidos))
      newErrors.apellidos = "El apellido no es válido";

    const phonePattern = /^\d{10}$/;
    if (telefono && !phonePattern.test(telefono))
      newErrors.telefono = "Ingresa un número de telefono válido";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo && !emailPattern.test(correo))
      newErrors.correo = "Ingresa un correo válido";

    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (contrasena && !passwordPattern.test(contrasena))
      newErrors.contrasena =
        "Incluye 8 caracteres entre mayúsculas, minúsculas y números";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/registro`, formDataSet, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Usuario creado exitosamente", response.data);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error creando usuario ");
    }
  };

  return (
    <RegistroUsuarioCont>
      <h1>Crear un nuevo Usuario</h1>
      <RegistroUsuarioForm onSubmit={handleSubmit}>
        <div className="column_one">
          <label htmlFor="nombres">Nombres *</label>
          <br />
          {errors.nombres && <span className="error">{errors.nombres}</span>}
          <input type="text" name="nombres" onChange={handleInputChange} />

          <label htmlFor="">Apellidos *</label>
          <br />
          {errors.apellidos && (
            <span className="error">{errors.apellidos}</span>
          )}
          <input type="text" name="apellidos" onChange={handleInputChange} />

          <label htmlFor="">Fecha de nacimiento *</label>
          <br />
          {errors.fechanacimiento && (
            <span className="error">{errors.fechanacimiento}</span>
          )}
          <input
            type="date"
            name="fechanacimiento"
            onChange={handleInputChange}
          />

          <label htmlFor="fkgenerousuario">Genero *</label>
          <br />
          {errors.fkgenerousuario && (
            <span className="error">{errors.fkgenerousuario}</span>
          )}
          <select name="fkgenerousuario" onChange={handleInputChange}>
            <option value={0}>Selecciona el Genero</option>
            {generos.map((genero) => (
              <option key={genero.idgenero} value={genero.idgenero}>
                {genero.nombregenero}
              </option>
            ))}
          </select>

          <label htmlFor="telefono">Telefono *</label>
          <br />
          {errors.telefono && <span className="error">{errors.telefono}</span>}
          <input type="text" name="telefono" onChange={handleInputChange} />
        </div>

        <div className="column_two">
          <label htmlFor="direccion">Dirección *</label>
          <br />
          {errors.direccion && (
            <span className="error">{errors.direccion}</span>
          )}
          <input type="text" name="direccion" onChange={handleInputChange} />

          <label htmlFor="correo">Correo *</label>
          <br />
          {errors.correo && <span className="error">{errors.correo}</span>}
          <input type="text" name="correo" onChange={handleInputChange} />

          <label htmlFor="contrasena">Contraseña *</label>
          <br />
          {errors.contrasena && (
            <span className="error">{errors.contrasena}</span>
          )}
          <input
            type="password"
            name="contrasena"
            onChange={handleInputChange}
          />

          <label htmlFor="rolselected">Rol *</label>
          <br />
          {errors.rolselected && (
            <span className="error">{errors.rolselected}</span>
          )}
          <select name="rolselected" onChange={handleInputChange}>
            <option value="">Seleccione el rol</option>
            {roles.map((rol) => (
              <option key={rol.idrol} value={rol.idrol}>
                {rol.descripcionrol}
              </option>
            ))}
          </select>
          <button type="submit">Crear</button>
        </div>
      </RegistroUsuarioForm>
      {showConfirmation && (
        <confirmationCont>Usuario Creado Exitosamente</confirmationCont>
      )}
    </RegistroUsuarioCont>
  );
}
