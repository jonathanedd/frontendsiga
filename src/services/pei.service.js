import axiosInstance from "../utils/api";

//Obtener Pei
export async function getPei(id) {
  try {
    const response = await axiosInstance.get(`pei/${id}`);
    const pei = response.data;
    console.log("SERVICIO PEI:", pei);
    return pei;
  } catch (error) {
    console.error("Error al obtener el Pei");
    return error;
  }
}

export async function createPeiWithArchivo(data, file) {
  try {
    const formData = new FormData();
    formData.append("nombrecolegio", data.nombrecolegio);
    formData.append("descripcionpei", data.descripcionpei);
    formData.append("mision", data.mision);
    formData.append("vision", data.vision);
    formData.append("fkprocedupei", data.fkprocedupei);
    if (file) {
      formData.append("file", file);
    }

    const response = await axiosInstance.post("pei/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Incluye el token si es necesario
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear PEI con archivo", error);
    throw error;
  }
}



export async function getArchivoPei(id) {
  try {
    const response = await axiosInstance.get(`archivopei/${id}`, {
      responseType: "blob",
      // responseType: "arraybuffer",
    });

    console.log("SERVICE REACT este es el idd del archivo", response.data);

    // const file = new Blob([response.data], {
    //   type: response.headers["content-type"],
    // });

    // return URL.createObjectURL(file);
    // const url = URL.createObjectURL(file);
    // console.log("REACT SERVICE: PDF URL:", url);
    // return url;

    const fileUrl = URL.createObjectURL(response.data);
    return fileUrl;
    // return response.data;
  } catch (error) {
    console.error("Error al obtener el archivo PEI", error);
    throw error;
  }
}
