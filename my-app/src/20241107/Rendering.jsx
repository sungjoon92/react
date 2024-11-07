import React from "react";

function Button({ width, height }) {
  console.log(width, height);

  ///////////////////////문제5 : 버튼 출력(컴포넌트 방식) /////////////////////////////
  const buttons = [
    { name: "확인", backgroundColor: "blue" },
    { name: "취소", backgroundColor: "red" },
    { name: "보류", backgroundColor: "gray" },
    { name: "1억년", backgroundColor: "pink" },
  ];

  let button = buttons.map((el) => {
    let name = el.name;
    let backgroundColor = el.backgroundColor;
    return (
      <button
        style={{
          backgroundColor,
          width,
          height,
          fontWeight: "bold",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        {name}
      </button>
    );
  });
  return <> {button} </>;
}

function Rendering({ width, height }) {
  console.log(width, height);

  ///////////문제 1: 이름 리스트/////////////////////
  const names = ["김철수", "이영희", "박민수", "정지원", "최동욱"];

  const name = names.map((el) => {
    return <li>{el}</li>;
  });
  ///////////////문제 2 : 사용자 정보 리스트////////////////////////////////////
  const users = [
    { id: 1, name: "김철수", age: 25, hobby: "독서" },
    { id: 2, name: "이영희", age: 28, hobby: "요리" },
    { id: 3, name: "박민수", age: 23, hobby: "게임" },
  ];

  const user = users.map((el) => {
    let id = el.id;
    let name = el.name;
    let age = el.age;
    let hobby = el.hobby;

    return (
      <li>
        id: {id}, name: {name}, age: {age}, hobby: {hobby}
      </li>
    );
  });
  ///////////// 문제 3: 30000원 이상 제품 리스트//////////////////////////
  const products = [
    { id: 1, name: "노트북", price: 55000 },
    { id: 2, name: "마우스", price: 15000 },
    { id: 3, name: "키보드", price: 45000 },
    { id: 4, name: "마우스패드", price: 8000 },
    { id: 5, name: "모니터", price: 150000 },
  ];

  const product = products.map((el) => {
    if (el.price >= 30000) {
      return (
        <li>
          {el.id}, {el.name}, {el.price}
        </li>
      );
    }
  });

  ///////////////////////문제4 : 댕댕이 이미지 출력 /////////////////////////////
  const imgUrls = [
    "https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg",
    "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3154.jpg",
    "https://images.dog.ceo/breeds/malamute/n02110063_16752.jpg",
    "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg",
  ];

  const imgUrl = imgUrls.map((el) => {
    return (
      <li style={{ width: "25%" }}>
        <img src={el} alt="댕댕쓰~" style={{ width: "100%", height: "100%" }} />
      </li>
    );
  });

  ///////////////////////문제6 : 커피 메뉴 출력 /////////////////////////////

  return (
    <>
      <div className="Rendering" style={{ width: "80%", margin: "0 auto" }}>
        <h2> 2024-11-07 랜더링</h2>
        <ul>{name}</ul>
        <ul>{user}</ul>
        <ul>{product}</ul>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>{imgUrl}</ul>
        <ul>
          <span>컴포넌트 방식</span>
          <li>
            <Button width={width} height={height}></Button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Rendering;
