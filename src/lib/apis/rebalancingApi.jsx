import instance, { authInstance } from "./base";
import axios from "axios";

export async function getReport() {
  try {
    const response = await authInstance(8084).get(
      `/portfolios/rebal/getweight`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
