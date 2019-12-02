import React, { useContext, useState, useEffect } from "react";
import { StepNames, ViewDirection, PlayerStat } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils/logUtils";
import { ProgressBar } from "../global/ProgressBar";

function ScreenMenu(props) {
  const { percentage, visitDirection, direction } = props;

  function getAvailableDirections() {
    return Object.values(ViewDirection);
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

  return (
    <div className="w-full flex justify-around mb-10">
      <ProgressBar percentage={percentage}>
        {getAvailableDirections().map(dir => (
          <button
            key={dir}
            className={`px-1 font-mono text-sm ${
              dir === direction ? "underline bg-black text-white" : ""
            }`}
            onClick={() => visitDirection(dir)}
          >
            {dir === direction
              ? `[x] ${dir}`
              : `go ${dir} ` + getArrowSymbol(dir)}
          </button>
        ))}
      </ProgressBar>
    </div>
  );
}

function ScreenBody(props) {
  const { direction, handleSelection } = props;

  return (
    <div className="text-center">
      {direction === ViewDirection.North ? <p>Empty Space</p> : null}
      {direction === ViewDirection.West ? (
        <div>
          <p>Empty Space</p>
          <p>Empty Space</p>
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
        </div>
      ) : null}
    </div>
  );
}

export function TheVoidEntranceScreen(props) {
  const { step, setStep, stats, setStats, logQueue, setLogQueue } = useContext(
    AppContext
  );
  const [direction, setDirection] = useState(ViewDirection.North);
  const [completed, setCompleted] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [nextDirection, setNextDirection] = useState(null);

  const visitTime = 500; // half second total
  const interval = visitTime / 100;

  useEffect(() => {
    if (percentage === 0) {
      return;
    }
    const timeOutId = setTimeout(() => {
      if (percentage >= 100) {
        setPercentage(0);
        setDirection(nextDirection);
        setNextDirection(null);
      } else {
        setPercentage(percentage + 1);
      }
    }, interval);
    return () => clearTimeout(timeOutId);
  }, [percentage]);

  if (step !== StepNames.TheVoidEntrance) {
    return null;
  }

  function visitDirection(target) {
    if (percentage > 0) {
      return;
    }

    if (direction === target) {
      setLogQueue(createLog(logQueue, `You are already here.`));
      return;
    }

    setLogQueue(createLog(logQueue, `Traveling ${target}`));
    setPercentage(1);
    setNextDirection(target);
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
      <ScreenMenu
        direction={direction}
        percentage={percentage}
        visitDirection={visitDirection}
      />
      {nextDirection !== null ? (
        <p>Traveling...</p>
      ) : (
        <ScreenBody direction={direction} handleSelection={handleSelection} />
      )}
    </div>
  );
}
