import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // react-redux - allows us to reach global store with provider Tag
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import App from './components/App';
import { RootReducer } from './reducers/RootReducer';
import * as serviceWorker from './serviceWorker';

// import './index.css';
import 'materialize-css/dist/css/materialize.min.css' //webpack needs to import correctly with no beginning path
// import 'semantic-ui-css/semantic.min.css';


// const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(RootReducer, {}, applyMiddleware())
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
