import React, { useContext, useState, useEffect } from "react";
import { StepName, ViewDirection, PlayerStat } from "../data";
import { AppContext } from "../context";
import { createLog } from "../utils";
import { ProgressBar } from "../global/ProgressBar";

interface ScreenMenuProps {
  percentage: number;
  visitDirectionHandler: (target: ViewDirection) => void;
  direction: ViewDirection;
}

function ScreenMenu(props: ScreenMenuProps) {
  const { percentage, visitDirectionHandler, direction } = props;

  function getAvailableDirections(): Array<ViewDirection> {
    return Object.values(ViewDirection).map(
      direction => direction as ViewDirection
    );
  }

  function getArrowSymbol(direction: ViewDirection) {
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
            onClick={() => visitDirectionHandler(dir)}
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

interface ScreenBodyProps {
  direction: ViewDirection;
  handleSelection: (
    attack: number,
    spirit: number,
    intelligence: number,
    determination: number
  ) => void;
}

function ScreenBody(props: ScreenBodyProps) {
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

export function TheVoidEntranceScreen() {
  const { step, setStep, stats, setStats, logQueue, setLogQueue } = useContext(
    AppContext
  );
  const [direction, setDirection] = useState<ViewDirection>(
    ViewDirection.North
  );
  const [completed, setCompleted] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [travelStatus, setTravelStatus] = useState<{
    traveling: boolean;
    nextDirection: ViewDirection | null;
  }>({
    traveling: false,
    nextDirection: null
  });

  useEffect(() => {
    if (percentage === 0) {
      return;
    }
    const timeOutId = setTimeout(() => {
      if (percentage >= 100) {
        setPercentage(0);
        setDirection(travelStatus.nextDirection as ViewDirection);
        setTravelStatus({ traveling: false, nextDirection: null });
      } else {
        setPercentage(percentage + 1);
      }
    }, 10);
    return () => clearTimeout(timeOutId);
  });

  if (step !== StepName.TheVoidEntrance) {
    return null;
  }

  function visitDirection(target: ViewDirection): void {
    if (percentage > 0) {
      return;
    }

    if (direction === target) {
      setLogQueue(createLog(logQueue, `You are already here.`));
      return;
    }

    setLogQueue(createLog(logQueue, `Traveling ${target}`));
    setPercentage(1);
    setTravelStatus({ traveling: true, nextDirection: target });
  }

  function handleSelection(
    attack: number,
    spirit: number,
    intelligence: number,
    determination: number
  ): void {
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
      setStep(StepName.InsideTheVoidFirst);
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
        visitDirectionHandler={visitDirection}
      />
      {travelStatus.traveling ? (
        <p>Traveling...</p>
      ) : (
        <ScreenBody direction={direction} handleSelection={handleSelection} />
      )}
    </div>
  );
}
