import React, { useContext } from "react";

import { StepName } from "../data";
import { AppContext } from "../context";

export function Log() {
  const { step, logQueue = [], setLogQueue } = useContext(AppContext);

  if (step === StepName.Introduction) {
    return null;
  }

  const logList = (
    <ul className="max-h-full overflow-y-scroll">
      {logQueue.map((log, idx) => {
        if (idx === 0) {
          return (
            <li key={log.id} className="bg-gray-300 animatedLog">
              {log.text}
              <p className="text-right mr-2 italic">Latest</p>
            </li>
          );
        }
        return (
          <li className="mb-0" key={log.id}>
            {log.text}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="text-xs w-1/3">
      <div className="flex">
        <p className="mr-2">Log</p> |{" "}
        <button className="mx-2" onClick={() => setLogQueue([])}>
          Clear
        </button>
      </div>
      {logQueue.length > 0 ? logList : null}
    </div>
  );
}
