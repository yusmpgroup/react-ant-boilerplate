import { put, takeLatest, all } from 'redux-saga/effects';

import { authLogin } from 'api/auth';
import { AUTH_ACTION_TYPES, setAuthInfo } from 'store/actions/auth.actions';
import { AUTH_TOKEN, writeToLocalState } from 'utils/localStorage';

function* loginFlow(action) {
  const { payload, successCb, errorCb } = action.payload;
  try {
    const { data: { token } } = yield authLogin(payload);
    yield put(setAuthInfo({ token }));
    successCb && successCb();
  } catch (e) {
    errorCb && errorCb(e);
  }
}

function* setAuthInfoFlow(action) {
  writeToLocalState(AUTH_TOKEN, action.payload.token);
}

function* watchLogin() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGIN, loginFlow);
}

function* watchSetAuthInfo() {
  yield takeLatest(AUTH_ACTION_TYPES.SET_AUTH_INFO, setAuthInfoFlow);
}

export default function* () {
  yield all([watchLogin(), watchSetAuthInfo()]);
}
