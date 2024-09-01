import React from "react";
import Layout from "../../components/Layout";
import { GlobalView, MenuItems } from "../../styles/globalview";
import AsistenteNav from "./AsistenteNav";
import AsistenteMain from "./AsistenteMain";
import AsistenteSide from "./AsistenteSide";

export default function AsistenteView() {
  return (
    <>
      <Layout />
      <GlobalView>
        <MenuItems>
          <AsistenteNav />
          <AsistenteMain />
          <AsistenteSide />
        </MenuItems>
      </GlobalView>
    </>
  );
}
