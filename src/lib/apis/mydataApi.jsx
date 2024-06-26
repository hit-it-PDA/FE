import instance, { authInstance } from "./base";

async function postMydata(selectedItemsByType) {
  try {
    const response = await authInstance(8083).post(
      `/assets/mydata-link`,
      selectedItemsByType
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

async function getAllAssets() {
  try {
    const response = await authInstance(8083).get(`/assets/totalAssets`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

async function getBankAssets() {
  try {
    const response = await authInstance(8083).get(`/assets/bank-accounts`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function getSecurityAssets() {
  try {
    const response = await authInstance(8083).get(`/assets/security-accounts`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function getCardAssets() {
  try {
    const response = await authInstance(8083).get(`/assets/cards`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function getLoanAssets() {
  try {
    const response = await authInstance(8083).get(`/assets/loans`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function getPensionAssets() {
  try {
    const response = await authInstance(8083).get(`/assets/pensions`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function postNumber(reqBody) {
  try {
    console.log(reqBody);
    const response = await authInstance(8083).post(
      `/assets/auth/send`,
      reqBody
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}

async function postAuthNumber(reqBody) {
  try {
    const response = await authInstance(8083).post(
      `/assets/auth/confirm`,
      reqBody
    );
    return response;
  } catch (error) {
    return error.response;
  }
}

async function getMydata() {
  try {
    const response = await authInstance(8083).get(`/assets/mydata-link`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export {
  postMydata,
  getAllAssets,
  getBankAssets,
  getSecurityAssets,
  getCardAssets,
  getLoanAssets,
  getPensionAssets,
  postNumber,
  postAuthNumber,
  getMydata,
};
