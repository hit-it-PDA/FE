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

export async function getFundDetail(portfolioId, fundId) {
  try {
    const response = await axios.get(
      `http://localhost:8084/api/portfolios/hitit/${portfolioId}/${fundId}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getMyDataPortfolio(body) {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await axios.post(
      `http://3.39.217.69:8084/api/portfolios/mydata/leveltest`,
      body
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getUserPortfolio() {
  try {
    const response = await authInstance(8084).get(`/portfolios/user`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export async function getUserPortfolioDetail() {
  try {
    const response = await authInstance(8084).get(`/portfolios/userfunds`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
export async function getUserFundDetail(fundId) {
  try {
    const response = await authInstance(8084).get(
      `/portfolios/userfunds/detail/${fundId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
