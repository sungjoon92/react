import React from "react";
import MenuCategory from "./MenuCategory";
export default function Menu() {
  const beverages = {
    categories: ["coffee", "ade", "tea", "specialtea"],
    result: [
      { name: "아메리카노", price: "5.0/5.5", category: "coffee" },
      { name: "카페 라떼", price: "6.0/6.5", category: "coffee" },
      { name: "바닐라 라떼", price: "6.0/6.5", category: "coffee" },

      { name: "레몬에이드", price: "6.0", category: "ade" },
      { name: "자몽에이드", price: "6.0", category: "ade" },
      { name: "유자에이드", price: "6.0", category: "ade" },

      { name: "녹차", price: "6.0", category: "tea" },
      { name: "둥굴레차", price: "6.0", category: "tea" },
      { name: "홍차", price: "6.0", category: "tea" },

      { name: "녹차", price: "6.0", category: "specialtea" },
      { name: "둥굴레차", price: "6.0", category: "specialtea" },
      { name: "홍차", price: "6.0", category: "specialtea" },
    ],
  };
  const { categories, result } = beverages;
  const beveragesObject = {};

  categories.forEach((category) => {
    beveragesObject[category] = result.filter((beverage) => {
      return beverage.category === category;
    });
  });

  const beveragesList = Object.entries(beveragesObject);

  const menuCategories = beveragesList.map((el) => {
    const [category, beverages] = el;
    return (
      <MenuCategory category={category} beverages={beverages}></MenuCategory>
    );
  });

  return (
    <>
      <h1 className="text-center">MenuBetter</h1>
      <main>{menuCategories}</main>
    </>
  );
}
