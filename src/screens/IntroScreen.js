import React, { useContext } from "react";
import { StepNames, T1, AchievementsList } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils/logUtils";

export function IntroScreen(props) {
  const {
    step,
    setTrophies,
    setStep,
    logQueue,
    setLogQueue,
    setUnlockedAchievements
  } = useContext(AppContext);

  if (step !== StepNames.Introduction) {
    return null;
  }

  function goToNext() {
    setUnlockedAchievements("First Artifact");
    setTrophies([T1]);
    const log = createLog(logQueue, "You accepted a gift.");
    setLogQueue(log);
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
      <br />
      <br /> You are about to enter{" "}
      <span className="font-semibold">The void</span>, a weird parallel reality
      that exist on the internet (on this domain precisely).
      <br />
      <br />
      Once you enter the void an immutable copy of your persona will be stored
      and trapped here.
      <br />
      <br />
      I don't really know how to escape and I won't be able to help you if get
      in trouble, please take a moment to decide what you want to do.
      <br />
      <br />
      You can explore the void now or just go to my social network links and
      skip everything.
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
