import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
export default function RootLayout() {
  return (
    <div id="body">
      {/* 헤더 */}
      <Header></Header>
      {/* 메인 */}
      <Outlet></Outlet>
      {/* 푸터 */}
      <footer>푸터</footer>
    </div>
  );
}
