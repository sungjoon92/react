import React, { useEffect, useState } from "react";
import { login, logout } from "../store/slices/authSlice";

import { useDispatch } from "react-redux";
function Loginmodal() {
  const dispatch = useDispatch();
  // 로그인 폼의 표시 여부를 관리
  const [showLoginForm, setShowLoginForm] = useState(false);

  // useEffect로 이벤트 리스너 관리
  useEffect(() => {
    const escapeHandler = (event) => handleEscape(event, setShowLoginForm);

    document.addEventListener("keyup", escapeHandler);

    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      document.removeEventListener("keyup", escapeHandler);
    };
  }, []); // 빈 배열로, 컴포넌트가 마운트/언마운트될 때만 실행

  // 'Esc' 키 눌렀을 때 실행되는 함수
  const handleEscape = (event, setShowLoginForm) => {
    if (event.key === "Escape") {
      setShowLoginForm(false); // 로그인 폼 닫기
    }
  };

  // 모달 삭제
  function modalclear(e) {
    setShowLoginForm(false);
  }

  return (
    /* 로그인 폼 렌더링 */

    <>
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
    </>
  );
}

export default Loginmodal;
