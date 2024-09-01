import React from "react";
import Layout from "../../components/Layout";
import { GlobalView, MenuItems } from "../../styles/globalview";
import AdminNav from "./AdminNav";
import AdminMain from "./AdminMain";
import { Routes, Route } from "react-router-dom";
import AdminSide from "./AdminSide";

//COMPONENT
export default function AdminView() {
  return (
    <>
      <Layout />
      <GlobalView>
        <MenuItems>
          <AdminNav />
          <Routes>
            <Route path="/" element={<AdminMain />} />
            <Route path="registrousuario" element={<></>} />
          </Routes>
          <AdminMain />
          <AdminSide />
        </MenuItems>
      </GlobalView>
    </>
  );
}
