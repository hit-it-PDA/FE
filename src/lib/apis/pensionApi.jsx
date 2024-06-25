import { authInstance } from "./base";

export async function getPensionAccount() {
  try {
    const response = await authInstance(8083).get(
      `/assets/retirement-pension-claim`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}
