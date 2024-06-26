import { authInstance } from "./base";

async function getAccount() {
  try {
    const response = await authInstance(8083).get(`/assets/account`);
    return response;
  } catch (error) {
    return error.response;
  }
}

async function postAccount(reqBody) {
  try {
    const response = await authInstance(8083).post(`/assets/account`, reqBody);
    return response;
  } catch (error) {
    return error.response;
  }
}
export { getAccount, postAccount };
