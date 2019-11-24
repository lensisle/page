import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepNames } from "../data";

export function Achievements(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction) {
    return null;
  }

  return (
    <div className="ml-16">
      <p className="mb-4">Achievements</p>
      <ul>
        <li>Connection stablished [Locked]</li>
        <li>About me [Locked]</li>
        <li>Teammates [Locked]</li>
      </ul>
    </div>
  );
}
