import React, { useContext } from "react";

import { AppContext } from "../context";
import { StepNames } from "../data";

const ActionButton = props => {
  return (
    <button className="block bg-black text-gray-200 inline-block px-5 py-3 rounded-sm text-sm uppercase tracking-wider font-semibold mb-6">
      {props.text}
    </button>
  );
};

export function Actions(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction || step === StepNames.FastEnd) {
    return null;
  }

  return (
    <div className=" max-w-lg flex flex-col">
      <ActionButton text="Connect" />
    </div>
  );
}
