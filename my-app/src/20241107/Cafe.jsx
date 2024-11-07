import React from "react";
import "./Cafe.css";
function Coffee() {
  const coffees = [
    { id: "coffee", name: "아메리카노", price: "5.0/5.5" },
    { id: "coffee", name: "카페라떼", price: "6.0/6.5" },
    { id: "coffee", name: "바닐라라떼", price: "6.0/6.5" },
    { id: "coffee", name: "카라멜마끼아또", price: "6.5/7.0" },
    { id: "ade", name: "레몬에이드", price: "6.0" },
    { id: "ade", name: "자몽에이드", price: "6.0" },
    { id: "ade", name: "유자에이드", price: "6.0" },
  ];
  // 커피
  const coffeeNames = [];
  const coffeePrice = [];
  // 에이드
  const adeNames = [];
  const adePrice = [];

  const coffee = coffees.map((el) => {
    const { id, name, price } = el;

    if (id === "coffee") {
      coffeeNames.push(<li>{name}</li>);
      coffeePrice.push(<li>{price}</li>);
    } else {
      adeNames.push(<li>{name}</li>);
      adePrice.push(<li>{price}</li>);
    }
  });

  return (
    <>
      <h3>COFFEE</h3>
      <div className="coffee flex space-between">
        <ul>{coffeeNames}</ul>
        <ul>{coffeePrice}</ul>
      </div>
      <h3>ADE</h3>
      <div className="ade flex space-between">
        <ul>{adeNames}</ul>
        <ul>{adePrice}</ul>
      </div>
    </>
  );
}

function Cafe() {
  return (
    <div className="cafe container flex-direction-column">
      <h2 style={{ color: "red" }}>MENU</h2>
      <Coffee></Coffee>
    </div>
  );
}

export default Cafe;
