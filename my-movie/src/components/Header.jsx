import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // 로그인 폼의 표시 여부를 관리
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <>
      <header>
        <h1 id="main-logo">
          <Link to="/">Sung Joon Movie</Link>
        </h1>
        <div className="login-button">
          {/* 로그인시에만 마이페이지 노출 */}
          {isLoggedIn ? (
            <Link to="/mypage" className="my-page">
              My page
            </Link>
          ) : null}

          {/* <button onClick={() => console.log(isLoggedIn)}>출력</button> */}

          {isLoggedIn ? (
            <button
              onClick={() => {
                dispatch(logout());
                // 홈으로 보내
              }}
            >
              로그아웃
            </button>
          ) : (
            <button
              onClick={() => {
                setShowLoginForm(!showLoginForm); // 폼 표시 상태 토글
              }}
            >
              로그인
            </button>
          )}
        </div>
        <ul>
          <li>
            <Link to="/">Home으로</Link>
          </li>
          <li>
            <Link to="/Movie/list">MOVIE LIST</Link>
          </li>
        </ul>
      </header>

      {/* 로그인 폼 렌더링 */}
      {showLoginForm && (
        <>
          <div className="login-form">
            <label htmlFor="id">ID 입력</label>
            <input type="text" id="id" name="id" autoFocus />
            <label htmlFor="password">Password 입력</label>
            <input type="password" id="password" name="password" />
            <button
              onClick={() => {
                dispatch(login());
                setShowLoginForm(false); // 로그인 후 폼 닫기
              }}
            >
              로그인
            </button>
          </div>
        </>
      )}
    </>
  );
}
