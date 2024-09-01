import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

export default function Logout() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    handleLogout();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
