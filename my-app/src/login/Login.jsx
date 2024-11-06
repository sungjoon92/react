import React from "react";

function Login({ id, password }) {
  let result;
  // if (id && password) {
  //	 result = <div>환영합니다!</div>;
  // } else {
  //   result = <div>로그인해주세요!</div>;
  // }

  const isLoggedIn = true;

  // if (isLoggedIn) {
  //   result = <div>환영합니다!</div>;
  // } else {
  //   result = <div>로그인해주세요!</div>;
  // }
  // return result;

  // 삼항연산자
  // return <div>{isLoggedIn ? "환영합니다!" : "로그인해주세요!"}</div>;

  return (
    <>
      {isLoggedIn && <div>"환영합니다"</div>}
      {!isLoggedIn && <div>"로그인해주세요"</div>}
    </>
  );
}

export default Login;
