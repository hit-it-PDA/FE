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
    return error.response;
  }
}

export { postMydata };
