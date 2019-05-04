// import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {ItemsReducer} from "./reducers/ItemsReducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import "./index.css";

const store = createStore(ItemsReducer);
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById("root"));