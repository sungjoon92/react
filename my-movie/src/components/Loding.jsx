import React from "react";
import { useLoading } from "../LoadingContext";

function Loding() {
  const { isLoading } = useLoading(); // 전역 로딩 상태 가져오기

  if (!isLoading) return null; // 로딩 중이 아닐 때 아무것도 렌더링하지 않음

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        zIndex: 9999,
      }}
    >
      로딩중...
    </div>
  );
}

export default Loding;
