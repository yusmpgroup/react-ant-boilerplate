export const AUTH_ACTION_TYPES = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
  SET_AUTH_INFO: 'auth/SET_AUTH_INFO',
};

export function login(payload) {
  return {
    type: AUTH_ACTION_TYPES.LOGIN,
    payload,
  };
}

export function setAuthInfo(payload) {
  return {
    type: AUTH_ACTION_TYPES.SET_AUTH_INFO,
    payload,
  };
}
