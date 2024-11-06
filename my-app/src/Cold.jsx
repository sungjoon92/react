import React from "react";

export default function Cold({ children }) {
  const cold = { children }; // false

  if (cold) {
    return <div>감기 걸림 ㅠㅠ</div>;
  } else {
    return <div>감기 안거림!</div>;
  }
}
