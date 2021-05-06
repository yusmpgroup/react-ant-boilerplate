import axios from 'axios';
import { getFromLocalStorage } from 'utils/localStorage';

const { API_URL } = process.env;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Accept-Language': 'ru',
  },
});

instance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = getFromLocalStorage('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { message, response, config } = error;

    const { status, data } = response;

    // if (message === UNAUTHORIZED_ERROR_MESSAGE && response.config.url !== '/login') {
    //   //logout();
    // }

    if (status >= 400 && status !== 401 && status <= 500) {
      let description = null;

      if (data.error) {
        description = data.error;
      }

      if (!data.error && data.message) {
        description = data.message;
      }

      if (Array.isArray(data.violations)) {
        description = data.violations.map((item) => item.message);
      }

      // if (config.notification.visible || !data.violations) {
      //   notification.error({
      //     message: error.message,
      //     description: COMMON_ERRORS[description] || description,
      //     duration: 0,
      //   });
      // }
    }

    return Promise.reject(error);
  }
);

export default instance;
