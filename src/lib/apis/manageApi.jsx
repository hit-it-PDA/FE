import { authInstance } from "./base";

export async function getRates() {
  try {
    const response = await authInstance(8084).get(`/portfolios/rate`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
