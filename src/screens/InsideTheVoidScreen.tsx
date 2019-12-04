import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepName } from "../data";

export function InsideTheVoidScreen() {
  const { step, setStep } = useContext(AppContext);

  if (step !== StepName.InsideTheVoidFirst) {
    return null;
  }

  return (
    <div>
      <p>Only darkness in your surroundings.</p>
    </div>
  );
}
