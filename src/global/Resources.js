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

  if (step <= StepNames.TheVoidEntrance || resources.length < 1) {
    return null;
  }

  return (
    <div>
      <p>Resources</p>
      {resources.map(resource => (
        <ul key={resource.name}>
          <li>
            <span className="italic">{resource.name}</span>{" "}
            <span className="text-md font-semibold">{resource.quantity}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}
