import axiosInstance from "../utils/api";

export async function getComunicados() {
  try {
    const response = await axiosInstance.get("/comunicado");
    const comunicados = response.data;
    console.log(comunicados);
    return comunicados;
  } catch (error) {
    console.error("Error al obtener comunicados frontend", error);
    return error;
  }
}

export async function createComunicado(formComunicado) {
  try {
    const response = await axiosInstance.post("/comunicado", formComunicado);
    return response.data;
  } catch (error) {
    console.error("Error al postear comunicado");
    return error;
  }
}

