import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextContextProvider>
        <App />
      </AuthContextContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
