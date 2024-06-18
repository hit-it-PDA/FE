import instance, { authInstance } from "./base";

async function getQuestion(num) {
  try {
    const response = await authInstance(8081).get(
      `/investment_tests/questions/${num}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export { getQuestion };
