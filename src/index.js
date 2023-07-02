import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { mySaga } from "./saga/typicodeSaga";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware =
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    : applyMiddleware(sagaMiddleware);

// store
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
