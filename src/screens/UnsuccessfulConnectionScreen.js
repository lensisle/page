import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepNames } from "../data";

export function UnsuccessfulConnectionScreen(props) {
  const { step } = useContext(AppContext);

  if (step !== StepNames.UnsuccessfulConnection) {
    return null;
  }

  return (
    <div>
      <p>
        Not every attempt to connect means that you will reach someone, but
        every try causes an effect here in the form of{" "}
        <span className="font-semibold">byte shards</span>.
      </p>
      <p>
        You could visit <span className="font-semibold">the portal</span> and
        see if there's the answer to your connection problem.
      </p>
    </div>
  );
}
