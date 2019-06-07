import {createStore, applyMiddleware, compose} from "redux";
import thunk  from "redux-thunk";
import promiseMiddelware  from "redux-promise";
import rootReduser from "./redusers/";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk, promiseMiddelware]//promiseMiddelware,

// const store = createStore(rootReduser,  compose(applyMiddleware(...middleware),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = createStore(rootReduser,  composeWithDevTools(applyMiddleware(...middleware)));

export default store;