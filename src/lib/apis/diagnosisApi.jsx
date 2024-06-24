import { authInstance } from "./base";

export async function getDiagnosisResult(survey) {
  try {
    const response = await authInstance(8081).post(
      `/retirements/test/results`,
      survey
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getPreviousDiagnosisResult() {
  try {
    const response = await authInstance(8081).get(`/retirements/test/results`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
