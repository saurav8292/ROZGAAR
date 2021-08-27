import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals'; 

import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from './reducers';

// const store = createStore(reducers);
const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render( 
   <Provider store={store}>
     <App />
   </Provider>, 
   document.getElementById('root'),
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
