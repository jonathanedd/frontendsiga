import axiosInstance from "../utils/api";

export async function createLogin(formData) {
  try {
    const response = await axiosInstance.post("/login", formData);
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response;
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    return error;
  }
}
