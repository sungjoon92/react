import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <h1>메인 홈</h1>
      <ul id="main-menu">
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
        <li>
          <Link to="/webtoon">웹툰</Link>
        </li>
        <li>
          <Link to="/novel">소설</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
