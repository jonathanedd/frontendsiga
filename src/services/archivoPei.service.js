// import axiosInstance from "../utils/api";

// export async function uploadArchivoPei(file, fkpeiarchivopei) {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("fkpeiarchivopei", fkpeiarchivopei);

//     const response = await axiosInstance.post("archivo/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error al subir el archivo PEI", error);
//     return error;
//   }
// }

import axiosInstance from "../utils/api";

export async function uploadArchivo(file, fkpeiarchivopei) {
  const formData = new FormData();
  formData.append("file", file); // El nombre aquí debe coincidir con el nombre del campo en el formulario
  formData.append("fkpeiarchivopei", fkpeiarchivopei);

  try {
    const response = await axiosInstance.post("archivo/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al subir archivo", error);
    throw error;
  }
}
