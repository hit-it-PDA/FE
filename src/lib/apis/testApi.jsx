import instance, { authInstance } from "./base";

async function getQuestion(num) {
  try {
    const response = await instance.get(`/investment_tests/questions/${num}`);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

const token = localStorage.getItem("accessToken");

async function postTestResult(result) {
  try {
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

async function getTestResult() {
  try {
    const response = await authInstance(8081).get(`/investment_tests/results`);
    return response;
  } catch (error) {
    return error.response;
  }
}
export { getQuestion, postTestResult, getTestResult };
