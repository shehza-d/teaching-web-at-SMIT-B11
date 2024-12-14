import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Toaster } from "react-hot-toast";

// https://github.com/shehza-d/redux-toolkit/blob/main/todo-with-react-redux
// https://excalidraw.com/#json=JSbE6Sa2YsQfznlmtpp70,SHv2r5vUnc0CQC4ESQHVKw

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
