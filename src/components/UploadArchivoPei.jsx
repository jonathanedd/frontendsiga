// import React, { useState } from "react";
// import { uploadArchivoPei } from "../services/archivoPei.service";

// export default function UploadArchivoPei() {
//   const [file, setFile] = useState(null);
//   const [fkpeiarchivopei, setFkpeiarchivopei] = useState(2); // ID de PEI asociado

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (file) {
//       try {
//         const response = await uploadArchivoPei({ fkpeiarchivopei }, file);
//         console.log("Archivo subido exitosamente", response);
//       } catch (error) {
//         console.error("Error al subir el archivo", error);
//       }
//     }
//   };
//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Subir Archivo</button>
//     </div>
//   );
// }

import React, { useState } from "react";
import { uploadArchivo } from "../services/archivoPei.service";

export default function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }
    try {
      await uploadArchivo(file, 2); // Ajusta el ID según corresponda
      alert("File uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
