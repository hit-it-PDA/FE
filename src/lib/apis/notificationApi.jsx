import { authInstance } from "./base";

const getNotification = async () => {
  try {
    const response = await authInstance(8081).get(`/users/notifications`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

const postNotification = async (reqBody) => {
  try {
    const response = await authInstance(8084).post(
      `/portfolios/send/message`,
      reqBody
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

const patchNotification = async (notificationId) => {
  try {
    console.log(notificationId);
    const response = await authInstance(8081).patch(
      `/users/notifications/${notificationId}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export { getNotification, postNotification, patchNotification };
