import api from 'utils/apiClient';

export const authLogin = (data) => {
  return api.post('/login', data);
};