import React, { useContext } from "react";
import { StepName } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils";

export default function IntroScreen() {
  const { step, setStep, logQueue, setLogQueue } = useContext(AppContext);

  if (step !== StepName.Introduction) {
    return null;
  }

  function goToNext() {
    const log = createLog(logQueue, "You entered the void.");
    setLogQueue(log);
    setStep(StepName.TheVoidEntrance);
  }

  function goToEnd() {
    const logQueue = createLog([], "You left the void.");
    setLogQueue(logQueue);
    setStep(StepName.FastEnd);
  }

  return (
    <p>
      Hello <span className="font-semibold">visitor</span>, this is my{" "}
      <span className="font-semibold">old self</span> writing.
      <br />
      <br /> You are about to enter{" "}
      <span className="font-semibold">The void</span>, a weird parallel reality
      that exist on the internet (on this domain precisely).
      <br />
      <br />
      Once you enter the void an immutable copy of your persona will be stored
      and trapped there.
      <br />
      <br />
      I don't really know how to escape and I won't be able to help if you get
      in trouble, please take a moment to decide what you want to do.
      <br />
      <br />
      You can explore the void now or just leave.
      <br />
      <br />
      <button
        className="block mr-1 inline-block hover:bg-gray-900 hover:text-gray-200"
        onClick={goToNext}
      >
        Explore
      </button>
      <button
        className="block hover:bg-gray-900 hover:text-gray-200"
        onClick={goToEnd}
      >
        Leave
      </button>
    </p>
  );
}
