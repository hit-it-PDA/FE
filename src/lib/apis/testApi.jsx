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

async function postTestResult(result) {
  try {
    console.log(result);
    const response = await authInstance(8081).post(
      `/investment_tests/results`,
      result
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
export { getQuestion, postTestResult };
