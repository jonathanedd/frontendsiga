import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext"; // Ajusta la ruta correcta

const ProtectedRoutes = () => {
  const { isLoggedIn, token, userLogin } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) return;
    const rol = userLogin && userLogin.rol.descripcionrol;

    const allowedRoutes = {
      ADMIN: "/adminview",
      ASISTENTE: "/asistantview",
      ALUMNO: "/alumnoview",
    };

    if (rol && allowedRoutes[rol]) {
      if (location.pathname === "/" || location.pathname === "/login") {
        // navigate(allowedRoutes[rol]);
        return <Navigate to={allowedRoutes[rol]} />;
      }
    }
  }, [isLoggedIn, userLogin, location]);

  if (!isLoggedIn || !token) {
    // navigate("/login", { replace: true });
    return <Navigate to="/login" />;
  }

  return <Outlet />;
  // return <></>;
};

export default ProtectedRoutes;
