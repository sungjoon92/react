import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
// import LoginModal from "../components/LoginModal";
// import catImg from "../assets/passwordcat.png";
import Search from "./Search";

export default function Header() {
  // // 곰탱이 url
  // const loginBear = [
  //   "https://www.tunnelbear.com/static/img/watch_bear3.1ea2cae.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear4.b7ee0ec.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear5.245fa99.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear6.b788430.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear7.9807292.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear8.ca337d0.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear9.66c3905.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear10.bfa319b.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear11.e21ff32.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear12.c957c0b.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear13.7ee3a60.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear14.de1c88d.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear15.f0b6e25.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear16.66cda9c.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear17.fcbd56d.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear18.ab17372.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear19.da921eb.png",
  //   "https://www.tunnelbear.com/static/img/watch_bear20.c53ab7e.png",
  // ];
  // // 곰 눈감는거
  // const logoutBear = [
  //   "https://www.tunnelbear.com/static/img/hide_bear0.9771826.png",
  //   "https://www.tunnelbear.com/static/img/hide_bear1.02ebfc5.png",
  //   "https://www.tunnelbear.com/static/img/hide_bear2.3fd96ce.png",
  //   "https://www.tunnelbear.com/static/img/hide_bear3.d93bff7.png",
  //   "https://www.tunnelbear.com/static/img/hide_bear4.3bb674d.png",
  //   "https://www.tunnelbear.com/static/img/hide_bear5.c9504fc.png",
  // ];

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // 로그인 폼의 표시 여부를 관리
  const [showLoginForm, setShowLoginForm] = useState(false);

  // 패스워드 입력시 로그인 이미지 변경
  const [loginImage, setLoginImage] = useState(false);
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

  // 로그인 이미지 컴포넌트
  function LoginIdImage() {
    return (
      <div className="login-image-box">
        <div className={loginImage ? "login-image" : ""}>{loginImage}🐱</div>
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
            {/* 고양이 이미지 input iD 를 따라가는 css구현으로 변경필요 */}
            <img
              className="login-image"
              src={
                loginImage
                  ? "../passwordBear/hide_bear5.c9504fc.png"
                  : "../idBear/watch_bear3.1ea2cae.png" // 기본 이미지 URL
              }
              alt=""
            />
            <LoginIdImage></LoginIdImage>

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
