import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// mport thunk from "redux-thunk";
import "./index.css";
import App from "./App";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(<App />, document.getElementById("root"));
