import React from "react";

function Card({ width, height, title, content, backgroundColor }) {
  return (
    <>
      <div style={{ width, height, backgroundColor }}></div>
      <div>{title}</div>
      <div>{content}</div>
    </>
  );
}

export default Card;
