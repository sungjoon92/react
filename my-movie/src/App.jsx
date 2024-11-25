import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./reset.css";
import "./App.css";
import { LoadingProvider } from "./LoadingContext";
import Loding from "./components/Loding";

function App() {
  return (
    <LoadingProvider>
      <Loding /> {/* 로딩 상태를 보여줄 컴포넌트 */}
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </LoadingProvider>
  );
}

export default App;
