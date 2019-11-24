import React, { useContext } from "react";

import { StepNames } from "../data";
import { AppContext } from "../context";

export function Resources(props) {
  const { step } = useContext(AppContext);

  const resources = [];

  if (
    step === StepNames.Introduction ||
    step === StepNames.FastEnd ||
    resources.length < 1
  ) {
    return null;
  }

  return (
    <div className="mt-10 text-xs">
      <p>Resources</p>
      {resources.map(resource => (
        <ul key={resource.id}>
          <li>
            {resource.name} {resource.quantity}
          </li>
        </ul>
      ))}
    </div>
  );
}
