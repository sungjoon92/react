import React from "react";
import MenuCategory from "./MenuCategory";
export default function Menu() {
  const beverages = [
    { name: "아메리카노", price: "5.0/5.5", category: "coffee" },
    { name: "카페 라떼", price: "6.0/6.5", category: "coffee" },
    { name: "바닐라 라떼", price: "6.0/6.5", category: "coffee" },

    { name: "레몬에이드", price: "6.0", category: "ade" },
    { name: "자몽에이드", price: "6.0", category: "ade" },
    { name: "유자에이드", price: "6.0", category: "ade" },

    { name: "녹차", price: "6.0", category: "tea" },
    { name: "둥굴레차", price: "6.0", category: "tea" },
    { name: "홍차", price: "6.0", category: "tea" },
  ];

  const coffee = beverages.filter((beverage) => {
    return beverage.category === "coffee";
  });
  const ade = beverages.filter((beverage) => {
    return beverage.category === "ade";
  });
  const tea = beverages.filter((beverage) => {
    return beverage.category === "tea";
  });

  return (
    <>
      <h1 className="text-center">MenuBetter</h1>
      <main>
        <MenuCategory category={"coffee"} beverages={coffee}></MenuCategory>
        <MenuCategory category={"ade"} beverages={ade}></MenuCategory>
        <MenuCategory category={"tea"} beverages={tea}></MenuCategory>
      </main>
    </>
  );
}
