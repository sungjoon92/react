import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
import LoginModal from "./LoginModal";
import Search from "./Search";

export default function Header() {
  // Redux 상태를 통해 로그인 여부 확인
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); // Redux 액션 디스패치
  // 로그인 모달 표시 여부를 관리하는 상태
  const [showLoginForm, setShowLoginForm] = useState(false);
  // 검색창 입력값 초기화
  const [searchValue, setSearchValue] = useState("");

  // 로고클릭시 input 초기화
  const hendleLogo = () => {
    setSearchValue("");
  };

  // 로그인 버튼 클릭 시 실행되는 함수
  const handleLogin = () => {
    dispatch(login()); // 로그인 액션 호출
    setShowLoginForm(false); // 로그인 모달 닫기
  };

  // 로그아웃 버튼 클릭 시 실행되는 함수

  const handleLogout = () => {
    dispatch(logout()); // 로그아웃 액션 호출
  };

  return (
    <header>
      {/* 로고 */}
      <h1 id="main-logo">
        <Link onClick={hendleLogo} to="/">
          Sung Joon Movie
        </Link>
      </h1>

      {/* 로그인/로그아웃 버튼 */}
      <div className="login-box">
        {isLoggedIn ? (
          // 로그인 상태일 때 My Page 링크와 로그아웃 버튼 표시
          <>
            <Link to="/mypage" className="my-page">
              My page |
            </Link>
            <div className="login-button" onClick={handleLogout}>
              Logout
            </div>
          </>
        ) : (
          // 비로그인 상태일 때 로그인 버튼 표시
          <div
            className="login-button"
            onClick={() => setShowLoginForm(true)} // 모달 표시
          >
            Login
          </div>
        )}
      </div>

      {/* 네비게이션 */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/category/now_playing">Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/category/popular">Popular</Link>
          </li>
          <li>
            <Link to="/movie/category/top_rated">Top Rated</Link>
          </li>
        </ul>
      </nav>

      {/* 검색 컴포넌트 */}
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      {/* 로그인 모달 컴포넌트 */}
      {showLoginForm && (
        <LoginModal
          onClose={() => setShowLoginForm(false)} // 모달 닫기
          onLogin={handleLogin} // 로그인 처리
        />
      )}
    </header>
  );
}
