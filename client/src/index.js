import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // react-redux - allows us to reach global store with provider Tag
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

// import './index.css';
// import 'semantic-ui-css/semantic.min.css';

// import { RootReducer } from './Reducers/RootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(() => [], {}, applyMiddleware())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
