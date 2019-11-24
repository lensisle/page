import React, { useContext } from "react";
import { AppContext } from "../context";
import { StepNames } from "../data";

export function Separator(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction) {
    return null;
  }

  return <hr className="my-5"></hr>;
}
