import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import NavBar from "./components/shared/NavBar/index";

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
