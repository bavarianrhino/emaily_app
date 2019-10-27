// import './index.css';
import 'materialize-css/dist/css/materialize.min.css' //webpack needs to import without path
// import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // react-redux - allows us to reach global store with provider Tag
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';
import { RootReducer } from './reducers/RootReducer';
import * as serviceWorker from './serviceWorker';

// Axios is used to test backend routes through chrome terminal.
// import axios from 'axios';
// window.axios = axios;



// const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(RootReducer, {}, applyMiddleware())
// const store = createStore(RootReducer, {}, applyMiddleware(thunk))
const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

console.log('STRIPE KEY IS: ', process.env.REACT_APP_STRIPE_KEY)
console.log('ENVIRONMENT IS: ', process.env.NODE_ENV)
serviceWorker.unregister();
