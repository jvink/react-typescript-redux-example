import { createStore, combineReducers, Store, applyMiddleware } from 'redux';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, connectRouter, RouterState } from 'connected-react-router';

import { personSaga } from './sagas/person';
import { personReducer, PersonState } from './reducers/person';
import { History } from 'history';

export interface ApplicationState {
    person: PersonState;
    router: RouterState;
}

export function* rootSaga() {
    yield all([fork(personSaga)]);
}

export const createRootReducer = (history: History) =>
    combineReducers({
        person: personReducer,
        router: connectRouter(history),
    });

export const configureStore = (history: History, initialState: ApplicationState): Store<ApplicationState> => {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}