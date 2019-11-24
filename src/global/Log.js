import React, { useContext } from "react";

import { StepNames } from "../data";
import { AppContext } from "../context";

export function Log(props) {
  const { step, logQueue = [] } = useContext(AppContext);

  if (step === StepNames.Introduction) {
    return null;
  }

  return (
    <div className="mt-10 text-xs">
      <p>Log</p>
      {logQueue.length > 0 &&
        logQueue.map(log => (
          <ul key={log.id}>
            <li className="italic">{log.text}</li>
          </ul>
        ))}
    </div>
  );
}
