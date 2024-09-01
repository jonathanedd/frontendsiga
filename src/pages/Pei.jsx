import React from "react";
import PeiContent from "../components/PeiContent";
import PeiForm from "../components/PeiForm";

//COMPONENTE PADRE
export default function Pei() {
  return (
    <div>
      THIS IS PEI PAGE
      <PeiForm />
      {/* <UploadArchivoPei /> */}
      <PeiContent />
    </div>
  );
}
