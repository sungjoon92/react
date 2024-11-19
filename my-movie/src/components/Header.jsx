// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { login, logout } from "../store/slices/loginSlice";
export default function Header() {
  // const { isLoggedIn } = useSelector((state) => state.login);
  // const dispatch = useDispatch();

  return (
    <header>
      <h1 id="main-logo">Sung Joon Movie</h1>
      <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/Movie/list">MOVIE LIST</Link>
        </li>
      </ul>
    </header>
  );
}
