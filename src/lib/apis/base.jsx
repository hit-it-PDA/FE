import axios from "axios";

const portfolioUrl = import.meta.env.VITE_PORTFOLIO_BASE_URI;
const assetUrl = import.meta.env.VITE_ASSET_BASE_URI;
const userUrl = import.meta.env.VITE_USER_BASE_URI;
const mydataUrl = import.meta.env.VITE_MYDATA_BASE_URI;

const instance = axios.create({
	baseURL: `${userUrl}:8081/api`,
});

// const persistedString = localStorage.getItem("persist:user");
// const token = persistedString?.includes("accessToken")
//   ? JSON.parse(JSON.parse(persistedString).userInfo).accessToken
//   : "";

const authInstance = (port) => {
	const token = localStorage.getItem("accessToken");
	let url = "";
	if (port == 8081) url = userUrl;
	else if (port == 8082) url = mydataUrl;
	else if (port == 8083) url = assetUrl;
	else if (port == 8084) url = portfolioUrl;
	else console.log("port is " + port);

	return axios.create({
		baseURL: import.meta.env.VITE_BASE_URL || `${url}:${port}/api`,
		headers: {
			"Content-Type": "application/json",
			Authorization: token ? `Bearer ${token}` : "",
		},
	});
};

export default instance;
export { authInstance };
