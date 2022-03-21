import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home/Home";
import { store } from "./globals/redux/stores/characterStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
