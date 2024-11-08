import React from "react";

export default function MenuCategoryItem({ name, price }) {
  return (
    <li
      className="flex justify-between"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>{name}</div>
      <div>{price}</div>
    </li>
  );
}
