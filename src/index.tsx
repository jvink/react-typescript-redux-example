import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import App from './App';
import { configureStore } from './store';
import './index.css';
import { ConnectedRouter } from 'connected-react-router';

const initialState = window.initialReduxState;

const history = createHashHistory();
const store = configureStore(history, initialState);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);