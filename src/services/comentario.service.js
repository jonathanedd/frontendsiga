import axiosInstance from "../utils/api";

//Obtener comentarios
export async function getComentarios() {
  try {
    const response = await axiosInstance.get("/comentario");
    const comentarios = response.data;
    return comentarios;
  } catch (error) {
    console.error("Error al obtener comentarios");
    return error;
  }
}

// Obtener comentarios por comunicado
export async function getComentariosByComunicado(idcomunicado) {
  try {
    const response = await axiosInstance.get(
      `/comentario/comunicados/${idcomunicado}/comentarios`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener comentarios por comunicado", error);
    return [];
  }
}

//Crear comentarios
export async function createComentario(idcomunicado, comentario) {
  try {
    const response = await axiosInstance.post(
      `/comentario/comunicados/${idcomunicado}/comentario`,
      comentario
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear comentario ", error);
    return null;
  }
}


