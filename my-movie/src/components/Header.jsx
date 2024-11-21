import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
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

  function modalclear(e) {
    setShowLoginForm(false);
  }

  /* 검색창 */
  function Search() {
    // 검색창 마우스 hover
    const [isHovered, setIsHovered] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    return (
      <div className="serach">
        <input
          onClick={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)} // 포커스 상태 false
          onMouseEnter={() => setIsHovered(true)} // hover 시작
          onMouseLeave={() => setIsHovered(false)} // hover 종료
          type="text"
          style={{
            width: isHovered || isFocus ? "80%" : "0px",
            border: isHovered || isFocus ? "" : "none",
            background: isHovered || isFocus ? "" : "none",
            transition: " 0.5s",
          }}
        />
        <div>
          <span
            onMouseEnter={() => setIsHovered(true)} // hover 시작
            onMouseLeave={() => setIsHovered(false)} // hover 종료
          >
            검색
          </span>
        </div>
      </div>
    );
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
