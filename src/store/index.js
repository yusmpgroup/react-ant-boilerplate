import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';

export function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    let composeEnhancers = compose;
    if (
        process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
    ) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
    }

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );
    sagaMiddleware.run(rootSaga);
    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./reducers/root.reducer', () => {
            const nextReducer = require('./reducers/root.reducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
