import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { reducer } from "./reducers";

import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux";

import reducer from "./reducers";

import thunk from 'redux-thunk';

import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
