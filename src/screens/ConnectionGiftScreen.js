import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepNames } from "../data";

export function ConnectionGiftScreen(props) {
  const { step, byteShards, setStep } = useContext(AppContext);

  if (step !== StepNames.ConnectionGateGift) {
    return null;
  }

  if (byteShards > 6) {
    setStep(StepNames.UnsuccessfulConnection);
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
      <p>
        A <span className="font-semibold">connection gate</span> enables the
        ability to communicate here in the void.
      </p>
      <p>Enjoy it and try to connect with someone.</p>

      <p className="mt-5 italic text-sm">
        ps: If you feel lost the{" "}
        <span className="font-semibold">log section</span> will describe every
        important action.
      </p>
    </div>
  );
}
