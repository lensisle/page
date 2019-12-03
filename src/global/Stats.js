import React, { useContext } from "react";

import { StepNames } from "../data";
import { AppContext } from "../context";

export function Stats(props) {
  const { step, stats } = useContext(AppContext);

  if (step <= StepNames.TheVoidEntrance) {
    return null;
  }

  const statsArray = Object.keys(stats);

  return (
    <div className="my-1">
      <p>Stats</p>
      <ul className="flex justify-between">
        {statsArray.map(stat => (
          <li key={stat}>
            <span className="italic">{stat}</span>{" "}
            <span className="text-md font-semibold">{stats[stat]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
