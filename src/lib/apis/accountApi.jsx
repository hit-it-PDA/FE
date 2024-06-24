import { authInstance } from "./base";

async function getAccount() {
  try {
    const response = await authInstance(8083).get(`/assets/account`);
    console.log(response);
    return response;
  } catch (error) {
    return error.response;
  }
}

async function postAccount(reqBody) {
  try {
    console.log(reqBody);
    const response = await authInstance(8083).post(`/assets/account`, reqBody);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
export { getAccount, postAccount };
