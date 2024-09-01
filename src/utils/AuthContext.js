import React, { createContext, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//services
import { createLogin } from "../services/login.service";

export const AuthContext = createContext({
  isLoggedIn: false,
  userLogin: null,
  token: null,
  role: null,
  handleLogin: () => {},
  handleLogout: () => {},
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectToRoleBasedView = useCallback(() => {
    switch (role) {
      case "ALUMNO":
        navigate("/alumnoview", { replace: true });
        break;
      case "ADMIN":
        navigate("/adminview", { replace: true });
        break;
      case "ASISTENTE":
        navigate("/asistantview", { replace: true });
        break;
      default:
        // navigate("/", { replace: true });
        break;
    }
  }, [role, navigate]);

  useEffect(() => {
    const storedUser = localStorage.getItem("userlogin");
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedToken && storedRole) {
      setUserLogin(JSON.parse(storedUser));
      setToken(storedToken);
      setRole(storedRole);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && location.pathname === "/login") {
      redirectToRoleBasedView();
    }
  }, [isLoggedIn, location, redirectToRoleBasedView]);

  const handleLogin = async (formData) => {
    try {
      const response = await createLogin(formData);
      const userData = response.data;
      const token = response.data.token;
      const role = userData.rol.descripcionrol;

      setIsLoggedIn(true);
      setUserLogin(userData);
      setToken(token);
      setRole(role);

      localStorage.setItem("userlogin", JSON.stringify(userData));
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      console.log(token);
      console.log("INICIO DE SESION EXITOSO");

      redirectToRoleBasedView();
      return userData;
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      throw error;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserLogin(null);
    setToken(null);
    setRole(null);
    localStorage.removeItem("userlogin");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userLogin, token, role, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
