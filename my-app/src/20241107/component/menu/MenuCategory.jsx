import React from "react";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ category, beverages }) {
  const menuList = beverages.map((beverage) => {
    return <MenuCategoryItem {...beverage}></MenuCategoryItem>;
  });

  return (
    <section>
      <h2 className="text-center">{category}</h2>
      <ul>{menuList}</ul>
    </section>
  );
}
