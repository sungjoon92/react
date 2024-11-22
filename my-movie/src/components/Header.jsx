import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
// import LoginModal from "../components/LoginModal";

import Search from "./Search";
import movieAPI from "../api/movieAPI";
export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // 로그인 폼의 표시 여부를 관리
  const [showLoginForm, setShowLoginForm] = useState(false);

  // 'Esc' 키 눌렀을 때 실행되는 함수
  const handleEscape = (event, setShowLoginForm) => {
    if (event.key === "Escape") {
      setShowLoginForm(false); // 로그인 폼 닫기
    }
  };

  // useEffect로 이벤트 리스너 관리
  useEffect(() => {
    const escapeHandler = (event) => handleEscape(event, setShowLoginForm);

    document.addEventListener("keyup", escapeHandler);

    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      document.removeEventListener("keyup", escapeHandler);
    };
  }, []); // 빈 배열로, 컴포넌트가 마운트/언마운트될 때만 실행

  // 모달 백그라운드 클릭시 모달 삭제
  function modalclear() {
    setShowLoginForm(false);
  }

  return (
    <>
      <header>
        <h1 id="main-logo">
          <Link to="/">Sung Joon Movie</Link>
        </h1>
        <div className="login-box">
          {/* 로그인시에만 마이페이지 노출 */}
          {isLoggedIn ? (
            <Link to="/mypage" className="my-page">
              My page |
            </Link>
          ) : null}

          {/* <button onClick={() => console.log(isLoggedIn)}>출력</button> */}
          {/* 로그인시 로그아웃버튼, 아닐시 로그인버튼 호출 */}
          {isLoggedIn ? (
            <div
              className="login-button"
              onClick={() => {
                dispatch(logout());
                // 홈으로 보내
              }}
            >
              logout
            </div>
          ) : (
            <div
              className="login-button"
              onClick={() => {
                setShowLoginForm(!showLoginForm); // 폼 표시 상태 토글
              }}
            >
              login
            </div>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/category/now_playing">Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/category/popular">popular</Link>
            </li>
            <li>
              <Link to="/movie/category/top_rated">Top Rated</Link>
            </li>
          </ul>
        </nav>
        {/* 검색 컴포넌트 */}
        <Search />
      </header>

      {/* 로그인 폼 렌더링 */}
      {showLoginForm && (
        <div id="modal">
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

          <div className="modal-back" onClick={(e) => modalclear(e)}></div>
        </div>
      )}
    </>
  );
}
