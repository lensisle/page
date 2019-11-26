import React, { useContext } from "react";
import { StepNames } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils/logUtils";

export function TheVoidEntranceScreen(props) {
  const { step } = useContext(AppContext);

  if (step !== StepNames.TheVoidEntrance) {
    return null;
  }

  return (
    <div>
      <p>> Quiet wise tree. [water this tree] [burn this tree]</p>
      <p>> Nothing.</p>
      <p>> Omnipotent Presence.</p>
      <p>> Nothing.</p>
      <p>> Nothing.</p>
      <p>> Evil Presence. [forgive] [absorb soul]</p>
      <p>> Nothing.</p>
      <p>> Nothing.</p>
      <p>> Man of Stone. [break body] [sculpt eyes]</p>
    </div>
  );
}
