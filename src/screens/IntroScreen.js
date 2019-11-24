import React, { useContext } from "react";
import { StepNames, T1 } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils/logUtils";

export function IntroScreen(props) {
  const { step, setTrophies, setStep, logQueue, setLogQueue } = useContext(
    AppContext
  );

  if (step !== StepNames.Introduction) {
    return null;
  }

  function goToNext() {
    const logQueue = createLog([], "You accepted a gift.");
    setLogQueue(logQueue);
    setTrophies([T1]);
    setStep(StepNames.ConnectionGift);
  }

  function goToEnd() {
    const logQueue = createLog([], "You left the void.");
    setLogQueue(logQueue);
    setStep(StepNames.FastEnd);
  }

  return (
    <p>
      Hello <span className="font-semibold">visitor</span>, this is my{" "}
      <span className="font-semibold">old self</span> writing.
      <br /> If <span className="font-semibold">past</span> is immutable, then,
      an immutable version of <span className="font-hairline">me</span> is
      stored on this app.
      <br />
      <br />
      Do you want to know more about this?{" "}
      <button
        className="mr-1 inline-block hover:bg-gray-900 hover:text-gray-200"
        onClick={goToNext}
      >
        yes
      </button>
      or{" "}
      <button
        className="hover:bg-gray-900 hover:text-gray-200"
        onClick={goToEnd}
      >
        no
      </button>
      .
    </p>
  );
}
