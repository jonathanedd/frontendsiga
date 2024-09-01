import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import { AuthProvider } from "./utils/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import AdminView from "./views/Admin/AdminView";
import AsistenteView from "./views/Asistente/AsistenteView";
import AlumnoView from "./views/Alumno/AlumnoView";

// import RegistroUsuario from "./views/Admin/RegistroUsuario";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* RUTAS PROTEGIDAS ADMIN */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/adminview/*" element={<AdminView />} />
            <Route path="/asistantview" element={<AsistenteView />} />
            <Route path="/alumnoview/*" element={<AlumnoView />} />
          </Route>

          {/* <Route path="/registrousuario" element={<ProtectedRoutes />}>
              <Route element={<RegistroUsuario />} />
            </Route> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
