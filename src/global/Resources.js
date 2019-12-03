import React, { useContext } from "react";

import { StepNames, ResourcesData } from "../data";
import { AppContext } from "../context";

export function Resources(props) {
  const { step, abandonedSouls } = useContext(AppContext);

  const resources = [
    {
      name: ResourcesData.AbandonedSouls.name,
      quantity: abandonedSouls
    }
  ];

  if (step <= StepNames.TheVoidEntrance || resources.length < 1) {
    return null;
  }

  return (
    <div>
      <p>Resources</p>
      <ul>
        {resources.map(resource => (
          <li key={resource.name}>
            <span className="italic">{resource.name}</span>{" "}
            <span className="text-md font-semibold">{resource.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
