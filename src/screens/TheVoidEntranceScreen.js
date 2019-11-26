import React, { useContext, useState } from "react";
import { StepNames, ViewDirection, PlayerStat } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils/logUtils";

export function TheVoidEntranceScreen(props) {
  const { step, setStep, stats, setStats, logQueue, setLogQueue } = useContext(
    AppContext
  );
  const [direction, setDirection] = useState(ViewDirection.North);
  const [completed, setCompleted] = useState(false);

  if (step !== StepNames.TheVoidEntrance) {
    return null;
  }

  function getAvailableDirections() {
    return Object.values(ViewDirection).filter(dir => dir != direction);
  }

  function getArrowSymbol(direction) {
    switch (direction) {
      case ViewDirection.North:
        return "↑";
      case ViewDirection.South:
        return "↓";
      case ViewDirection.West:
        return "←";
      case ViewDirection.East:
        return "→";
    }
  }

  function handleSelection(attack, spirit, intelligence, determination) {
    // safe check
    if (completed) {
      return;
    }

    const newStats = {
      ...stats,
      [PlayerStat.Attack]: attack,
      [PlayerStat.Spirit]: spirit,
      [PlayerStat.Intelligence]: intelligence,
      [PlayerStat.Determination]: determination
    };

    setCompleted(true);
    setStats(newStats);
    setLogQueue(createLog(logQueue, "Your choice will be remembered."));
    setTimeout(() => {
      setStep(StepNames.ConnectionGateGift);
    }, 5000);
  }

  if (completed) {
    return <div>Everything is fading...</div>;
  }

  return (
    <div>
      <div className="w-full flex justify-around mb-10">
        {getAvailableDirections().map(el => (
          <button
            key={el}
            className="underline font-mono text-sm"
            onClick={() => setDirection(el)}
          >
            Look {el} {getArrowSymbol(el)}
          </button>
        ))}
      </div>
      <div className="text-center">
        {direction === ViewDirection.North ? <p>Empty Space</p> : null}
        {direction === ViewDirection.West ? (
          <div>
            <p>
              Quiet wise tree [
              <button
                className="font-bold hover:bg-black hover:text-white"
                onClick={() => handleSelection(0, 1, 2, 1)}
              >
                water
              </button>{" "}
              tree] [
              <button
                className="font-bold hover:bg-black hover:text-white"
                onClick={() => handleSelection(1, 1, 0, 2)}
              >
                burn
              </button>{" "}
              tree]
            </p>
            <p>Empty Space</p>
            <p>Empty Space</p>
          </div>
        ) : null}
        {direction === ViewDirection.South ? (
          <div>
            <p>Fire</p>
            <p>Fire</p>
            <p>
              Evil Presence [
              <button
                className="font-bold hover:bg-black hover:text-white"
                onClick={() => handleSelection(0, 2, 1, 1)}
              >
                tell
              </button>{" "}
              forgive] [
              <button
                className="font-bold hover:bg-black hover:text-white"
                onClick={() => handleSelection(2, 1, 0, 1)}
              >
                absorb
              </button>{" "}
              soul]
            </p>
            <p>Fire</p>
            <p>Fire</p>
          </div>
        ) : null}
        {direction === ViewDirection.East ? (
          <div>
            <p>Sand</p>
            <p>Sand</p>
            <p>Sand</p>
            <p>
              Man of Stone [
              <button
                className="font-bold hover:bg-black hover:text-white"
                onClick={() => handleSelection(0, 0, 1, 3)}
              >
                break
              </button>{" "}
              body] [
              <button
                className="font-bold hover:bg-black hover:text-white"
                onClick={() => handleSelection(1, 1, 1, 1)}
              >
                sculpt
              </button>{" "}
              eyes]
            </p>
            <p>Sand</p>
            <p>Sand</p>
            <p>Sand</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
