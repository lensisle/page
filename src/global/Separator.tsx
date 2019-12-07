import React, { useContext } from "react";
import { AppContext } from "../context";
import { StepName } from "../data";
import { tryPreventRender } from "../utils";

export default function Separator() {
  const { step } = useContext(AppContext);

  if (tryPreventRender(step, [StepName.Introduction])) {
    return null;
  }

  return <hr className="my-5"></hr>;
}
