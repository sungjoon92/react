import React, { useState, useEffect } from "react";
import idBear from "../data/idBear"; // ID 입력에 따라 변경되는 곰 이미지 배열
import passwordBear from "../data/passwordBear"; // 비밀번호 입력 시 사용하는 곰 이미지 배열

export default function LoginModal({ onClose, onLogin }) {
  // 곰 이미지를 관리하는 상태 (초기값은 첫 번째 곰 이미지)
  const [loginImage, setLoginImage] = useState(idBear[0]);

  // ESC 키 입력 시 모달 닫기
  useEffect(() => {
    // 키보드 이벤트 리스너
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose(); // ESC 키 입력 시 모달 닫기
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener("keyup", handleEscape);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("keyup", handleEscape);
    };
  }, [onClose]); // onClose 의존성 추가

  // 아이디 입력값에 따라 곰 이미지를 변경하는 함수
  function changeLoginId(value) {
    // 입력 길이를 3으로 나눈 몫을 이미지 배열의 인덱스로 사용
    let index = Math.floor(value.length / 3);

    // 인덱스가 배열 길이를 초과하지 않도록 조정
    if (index >= idBear.length) index = idBear.length - 1;

    // 해당 인덱스의 곰 이미지를 상태로 설정
    setLoginImage(idBear[index]);
  }

  /**
   * 비밀번호 입력창에 포커스가 되었을 때 곰 이미지를 애니메이션으로 변경
   */
  const focusPasswordImage = () => {
    let index = 0; // 배열의 첫 번째 요소부터 시작
    const intervalId = setInterval(() => {
      setLoginImage(passwordBear[index]); // 곰 이미지를 순차적으로 설정
      index++;

      // 배열 끝에 도달하면 애니메이션 종료
      if (index >= passwordBear.length) clearInterval(intervalId);
    }, 80); // 80ms 간격으로 이미지 변경
  };

  /**
   * 비밀번호 입력창에서 포커스가 해제되었을 때 곰 이미지를 애니메이션으로 변경
   */
  const blurPasswordImage = () => {
    let index = passwordBear.length - 1; // 배열의 마지막 요소부터 시작
    const intervalId = setInterval(() => {
      setLoginImage(passwordBear[index]); // 곰 이미지를 순차적으로 설정
      index--;

      // 첫 번째 요소에 도달하면 애니메이션 종료 및 기본 이미지로 설정
      if (index < 0) {
        clearInterval(intervalId);
        setLoginImage(idBear[0]); // 기본 곰 이미지로 되돌림
      }
    }, 80); // 80ms 간격으로 이미지 변경
  };

  return (
    <div id="modal">
      <form className="login-form">
        {/* 곰 이미지 출력 */}
        <img className="login-image" src={loginImage} alt="Login Bear" />

        {/* ID 입력 필드 */}
        <label htmlFor="id">ID 입력</label>
        <input
          type="text"
          id="id"
          name="id"
          autoFocus
          onChange={(e) => changeLoginId(e.target.value)} // 입력값에 따라 곰 이미지 변경
        />

        {/* 비밀번호 입력 필드 */}
        <label htmlFor="password">Password 입력</label>
        <input
          type="password"
          id="password"
          name="password"
          onFocus={focusPasswordImage} // 포커스 시 애니메이션 실행
          onBlur={blurPasswordImage} // 블러(포커스 해제) 시 애니메이션 실행
        />

        {/* 로그인 버튼 */}
        <input
          className="login-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault(); // 기본 폼 동작 방지
            onLogin(); // 로그인 처리 함수 호출
          }}
          value="Login"
        />
      </form>

      {/* 모달 백그라운드 클릭 시 닫힘 */}
      <div className="modal-back" onClick={onClose}></div>
    </div>
  );
}
