import instance, { authInstance } from "./base";
import axios from "axios";

export async function getAllPortfolio() {
  try {
    // const response = await authInstance(8084).get("/portfolios/hitit");
    const response = await axios.get(
      "http://localhost:8084/api/portfolios/hitit"
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getFundList(id) {
  try {
    const response = await axios.get(
      `http://localhost:8084/api/portfolios/hitit/${id}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
