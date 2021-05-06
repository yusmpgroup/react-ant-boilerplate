import { AUTH_ACTION_TYPES } from 'store/actions/auth.actions';
import { AUTH_TOKEN, getFromLocalStorage } from 'utils/localStorage';

let initialState = {
  token: getFromLocalStorage(AUTH_TOKEN),
};

export default function (state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.SET_AUTH_INFO:
      return { ...state, token: payload.token };
    default:
      return state;
  }
}
