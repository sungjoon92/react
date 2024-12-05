import React from "react";
import router from "./router";
// 구멍 뚫는애
import { RouterProvider } from "react-router-dom";
// 리덕스 = 전역으로 갖다쓰기위한애
import { Provider } from "react-redux";
// 리덕스 쓸 제일 상위에있는 파일
import store from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}
