import React from "react";

export function GameMenu(props) {
  return (
    <div className="w-2/3">
      <ul className="flex">
        <li className="mx-8" style={{ textDecoration: "underline" }}>
          Shop
        </li>
        <li className="mx-8">Inventory</li>
      </ul>
    </div>
  );
}
