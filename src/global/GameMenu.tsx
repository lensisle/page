import React, { useContext } from "react";
import { AppContext } from "../context";
import { StepName } from "../data";
import { tryPreventRender } from "../utils";

export default function GameMenu() {
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
