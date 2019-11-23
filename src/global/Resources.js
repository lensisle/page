import React from "react";

import { StepNames } from "../data";

export function Resources(props) {
  const { step, resources = [] } = props;

  if (
    step === StepNames.Introduction ||
    step === StepNames.FastEnd ||
    resources.length < 1
  ) {
    return null;
  }

  return (
    <div className="mt-10 text-xs">
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
