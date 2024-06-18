import instance, { authInstance } from "./base";

export async function getAllPortfolio() {
  try {
    const response = await authInstance(8084).get("/portfolios/hitit");
    return response.data;
  } catch (error) {
    return error.response;
  }
}
