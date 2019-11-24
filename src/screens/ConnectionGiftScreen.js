import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepNames } from "../data";

export function ConnectionGiftScreen(props) {
  const { step } = useContext(AppContext);

  if (step !== StepNames.ConnectionGift) {
    return null;
  }

  return (
    <div>
      <p>
        Thanks for accepting my proposition, you are now inside the{" "}
        <span className="font-semibold">the void</span>.
      </p>
      <p>
        My gift to you is one{" "}
        <span className="font-semibold">connection gate</span>.
      </p>
      <p>Please enjoy it.</p>
    </div>
  );
}
