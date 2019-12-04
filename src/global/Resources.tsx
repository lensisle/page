import React, { useContext } from "react";

import { StepName, ResourcesData } from "../data";
import { AppContext } from "../context";

export function Resources() {
  const { step, abandonedSouls } = useContext(AppContext);

  const resources = [
    {
      name: ResourcesData.AbandonedSouls,
      quantity: abandonedSouls
    }
  ];

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
