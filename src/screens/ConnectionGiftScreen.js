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
        My gift to you is one{" "}
        <span className="font-semibold">connection token</span>.
      </p>
      <p>Please enjoy this present, if you want.</p>
    </div>
  );
}
