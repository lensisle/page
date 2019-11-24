import React, { useContext } from "react";
import { AppContext } from "../context";
import { StepNames } from "../data";

export function GameMenu(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction || step === StepNames.FastEnd) {
    return null;
  }

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
