import React, { useContext } from "react";
import { AppContext } from "../context";
import { StepNames } from "../data";

export function GameMenu(props) {
  const { step } = useContext(AppContext);

  if (step <= StepNames.ConnectionGift) {
    return null;
  }

  return (
    <div className="w-2/3">
      <ul className="flex">
        <li className="mx-8" style={{ textDecoration: "underline" }}>
          The Portal
        </li>
      </ul>
    </div>
  );
}
