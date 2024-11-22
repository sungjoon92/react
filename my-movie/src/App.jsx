import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>;
      </Provider>
    </>
  );
}
export default App;
