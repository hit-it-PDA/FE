import instance from "./base";

async function signUp(reqBody) {
  try {
    const response = await instance.post(`/users/signup`, reqBody);
    return response;
  } catch (error) {
    return error.response;
  }
}
async function login(reqBody) {
  try {
    const response = await instance.post(`/users/login`, reqBody);
    if (response.status === 200) {
      console.log(response.data.response.token);
      const token = response.data.response.token; // 서버 응답에서 토큰을 추출
      localStorage.setItem("accessToken", token); // 로컬 스토리지에 토큰 저장
    }
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
export { signUp, login };
