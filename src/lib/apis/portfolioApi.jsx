import instance, { authInstance } from "./base";
import axios from "axios";

const baseUrl = import.meta.env.VITE_PORTFOLIO_BASE_URI;
const port = 8084;
const url = `${baseUrl}:${port}`;

export async function getAllPortfolio() {
	try {
		// const response = await authInstance(8084).get("/portfolios/hitit");
		const response = await axios.get(`${url}/api/portfolios/hitit`);
		return response.data;
	} catch (error) {
		return error.response;
	}
}

export async function getFundList(id) {
	try {
		const response = await axios.get(`${url}/api/portfolios/hitit/${id}`);
		return response.data;
	} catch (error) {
		return error.response;
	}
}

export async function getFundDetail(portfolioId, fundId) {
	try {
		const response = await axios.get(
			`${url}/api/portfolios/hitit/${portfolioId}/${fundId}`
		);
		return response.data;
	} catch (error) {
		return error.response;
	}
}

export async function getMyDataPortfolio(body) {
	const token = localStorage.getItem("accessToken");
	try {
		const response = await authInstance(8084).get(`/portfolios/mydata`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		return error.response;
	}
}

export async function changePortfolio(id) {
	try {
		const response = await authInstance(8084).post(`/portfolios/change/${id}`);
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

export async function changeMyDataPortfolio(body) {
	try {
		const response = await authInstance(8084).post(
			`/portfolios/mydata/change`,
			body
		);
		return response.data;
	} catch (error) {
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
