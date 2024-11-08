import React from "react";
import MenuCategory from "./MenuCategory";
export default function Menu() {
  const coffee = [
    { name: "아메리카노", price: "5.0/5.5" },
    { name: "카페 라떼", price: "6.0/6.5" },
    { name: "바닐라 라떼", price: "6.0/6.5" },
  ];
  const ade = [
    { name: "레몬에이드", price: "6.0" },
    { name: "자몽에이드", price: "6.0" },
    { name: "유자에이드", price: "6.0" },
  ];
  const tea = [
    { name: "녹차", price: "6.0" },
    { name: "둥굴레차", price: "6.0" },
    { name: "홍차", price: "6.0" },
  ];

  return (
    <>
      <h1 className="text-center">Menu</h1>
      <main>
        <MenuCategory category={"coffee"} beverages={coffee}></MenuCategory>
        <MenuCategory category={"ade"} beverages={ade}></MenuCategory>
        <MenuCategory category={"tea"} beverages={tea}></MenuCategory>
        <MenuCategory category={"tea"} beverages={tea}></MenuCategory>
      </main>
    </>
  );
}
