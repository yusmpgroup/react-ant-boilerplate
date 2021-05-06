import { combineReducers } from 'redux';

import authReducer from './auth.reducer';

const appReducer = combineReducers({
  authState: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'GLOBAL_CLEAR_STATE') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
