export const AUTH_TOKEN = 'project/auth/TOKEN';
export const LANG = 'project/config/LANG';

export function writeToLocalState(key, state) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    throw e;
  }
}

export const getFromLocalStorage = (key) => {
  let state;

  try {
    state = JSON.parse(localStorage.getItem(key)) || null;
  } catch (e) {
    throw e;
  }

  return state;
};