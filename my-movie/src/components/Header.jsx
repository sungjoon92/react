import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
// import LoginModal from "../components/LoginModal";

import catImg from "../assets/passwordcat.png";

import Search from "./Search";
export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // 로그인 폼의 표시 여부를 관리
  const [showLoginForm, setShowLoginForm] = useState(false);

  // 패스워드 입력시 로그인 이미지 변경
  const [loginImage, setLoginImage] = useState(null);
  console.log(loginImage);

  // 모달 백그라운드 클릭시 모달 삭제
  function modalclear() {
    setShowLoginForm(false);
    setLoginImage(null);
  }
  // 'Esc' 키 눌렀을 때 실행되는 함수
  const handleEscape = (event, setShowLoginForm) => {
    if (event.key === "Escape") {
      setShowLoginForm(false); // 로그인 폼 닫기
      setLoginImage(null);
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

  function showLoginImage(e) {
    setLoginImage(e.target.value);
  }

  // function LoginIdImage() {
  //   return <div>ddd</div>;
  // }
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
          <form className="login-form">
            <div className="login-image-box">
              <img
                className="login-image"
                src={
                  loginImage
                    ? `${catImg}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hlArMM55Fgu6z5If7C9RT-3rDrnpL5JKkA&s" // 기본 이미지 URL
                }
                alt=""
              />
            </div>
            <label htmlFor="id">ID 입력</label>
            <input
              type="text"
              id="id"
              className="login-id"
              name="id"
              autoFocus
              onChange={(e) => {
                const value = e.target.value;
                if (value) {
                  const lastChar = value[value.length - 1]; // 마지막 글자
                  setLoginImage(lastChar); // 마지막 글자를 loginImage로 설정
                  // <LoginIdImage></LoginIdImage>;
                } else {
                  setLoginImage(null); // 입력이 비어 있을 경우 초기화
                }
              }}
            />
            <label htmlFor="password">Password 입력</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                showLoginImage(e);
              }}
            />
            <input
              className="login-button"
              type="submit"
              onClick={() => {
                dispatch(login());
                setShowLoginForm(false); // 로그인 후 폼 닫기
              }}
              value={"login"}
            />
          </form>

          <div className="modal-back" onClick={(e) => modalclear(e)}></div>
        </div>
      )}
    </>
  );
}
