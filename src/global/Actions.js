import React, { useContext } from "react";

import { AppContext } from "../context";
import { StepNames } from "../data";

const ActionButton = props => {
  const { percentage = 0 } = props;

  return (
    <button className="block bg-black text-gray-200 rounded-sm text-sm uppercase tracking-wider font-semibold mb-4 relative min-w-full h-12">
      <span className="relative text-white z-40">{props.text}</span>
      <div
        style={{ left: 0, width: `${percentage}%` }}
        className="bg-gray-800 absolute top-0 left-0 bottom-0 z-10"
      ></div>
    </button>
  );
};

export function Actions(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction || step === StepNames.FastEnd) {
    return null;
  }

  return (
    <div className=" max-w-lg flex flex-col w-40">
      <ActionButton text="Connect" />
      <ActionButton text="Build" />
    </div>
  );
}
