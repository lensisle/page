import React, { useContext } from "react";

import { StepNames, ResourcesData } from "../data";
import { AppContext } from "../context";

export function Resources(props) {
  const { step, byteShards } = useContext(AppContext);

  const resources = [
    {
      name: ResourcesData.ByteShards.name,
      quantity: byteShards
    }
  ];

  if (
    step === StepNames.Introduction ||
    step === StepNames.FastEnd ||
    resources.length < 1
  ) {
    return null;
  }

  return (
    <div className="mt-10">
      <p>Resources</p>
      {resources.map(resource => (
        <ul key={resource.name}>
          <li>
            {resource.name} {resource.quantity}
          </li>
        </ul>
      ))}
    </div>
  );
}
