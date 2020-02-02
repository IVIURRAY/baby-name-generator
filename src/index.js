import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers';

import './index.css';

const store = createStore(reducers);

window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
