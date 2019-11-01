import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';
import { RootReducer } from './reducers/RootReducer';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
window.axios = axios;

const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

console.log(`STRIPE KEY IS: ${process.env.REACT_APP_STRIPE_KEY} ----- ENVIRONMENT IS IN: ${process.env.NODE_ENV}`)
serviceWorker.unregister();

// ************************************
// Notes can be found in consolelog.js 
// ************************************