import React, { useEffect, useState } from "react";

import { BlobProvider, Document, Page } from "@react-pdf/renderer";

//services
import { getPei } from "../services/pei.service";

//stilos

//COMPONENTE hijo
export default function PeiContent() {
  const [showPei, setShowPei] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);

  //obtener pei
  const fetchPei = async () => {
    try {
      const responsePei = await getPei(19);
      setShowPei(responsePei);

      if (
        responsePei.archivopei &&
        responsePei.archivopei.contenidoarchivopei
      ) {
        const byteArray = new Uint8Array(
          responsePei.archivopei.contenidoarchivopei.data
        );
        const blob = new Blob([byteArray], {
          type: responsePei.archivopei.tipoarchivopei,
        });

        setPdfBlob(blob);
      }
      console.log("REACT: la info del pei es:", responsePei);
    } catch (error) {
      console.log("React, Error fetching Pei", error);
    }
  };

  useEffect(() => {
    fetchPei();
  }, []);

  if (!showPei) {
    return <div>Cargando...</div>;
  }

  console.log("REACT: Archivo:", showPei.archivopei?.contenidoarchivopei);

  return (
    <div>
      {showPei.nombrecolegio}
      {showPei.descripcionpei}
      {showPei.mision}
      {showPei.vision}

      {pdfBlob && (
        <BlobProvider
          document={
            <Document>
              <Page pageNumber={1} />
            </Document>
          }
        >
          {({ blob, url, loading, error }) => {
            if (loading) return <div>Cargando documento...</div>;
            if (error) return <div>Error al cargar el documento.</div>;
            return (
              <iframe
                src={URL.createObjectURL(blob || pdfBlob)}
                width="100%"
                height="750px"
                title="Archivo PEI"
                style={{ border: "none" }}
              ></iframe>
            );
          }}
        </BlobProvider>
      )}
    </div>
  );
}
