import React from "react";

function UseEffect() {
  function handleClick(event) {
    event.target.textContent = "버튼클릭완료";
    alert("버튼클릭");
  }

  function handleMouseOver(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
  }
  function handleMouseOut(event) {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
  }
  function handlechange(event) {
    const text = event.target.value;
    let textbox = document.querySelector(".textbox");
    textbox.textContent = event.target.value;
    console.log(event.target.value);
    // 전체 텍스트 중 마지막 글자에만 스타일 적용
    const styledText =
      text.slice(0, -1) +
      `<span style="color: red; font-size: 30px;">${text.slice(-1)}</span>`;
    textbox.innerHTML = styledText; // innerHTML을 사용하여 HTML 스타일 적용
  }
  function handleKeyUp(event) {
    let textbox = document.querySelector(".textbox");
    textbox.style.color = "black";
    textbox.style.fontSize = "15px";
  }

  return (
    <>
      <div
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid black",
          transition: "1s",
        }}
      >
        UseEffect
      </div>
      <input onChange={handlechange} onKeyUp={handleKeyUp} type="text" />
      <div
        className="textbox"
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid black",
          transition: "1s",
        }}
      ></div>
    </>
  );
}

export default UseEffect;
