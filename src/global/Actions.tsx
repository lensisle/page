import React, { useContext, useEffect, useState, useRef } from "react";

import { AppContext } from "../context";
import { StepName, CoolDowns } from "../data";
import { createLog, tryPreventRender } from "../utils";
import { ABANDONED_SOULS_NORMAL, ABANDONED_SOULS_HIGH } from "../strings";

interface ProgressButtonProps {
  percentage: number;
  onClick: any;
  text: string;
}

const ProgressButton = (props: ProgressButtonProps) => {
  const { percentage = 0, onClick } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgColor = percentage > 0 ? "bg-white" : "bg-black";

  const timeMap: { [index: number]: string } = {
    [0]: "◴",
    [1]: "◷",
    [2]: "◶",
    [3]: "◵",
    [4]: "◴"
  };

  const timeChar: string = timeMap[Math.floor(percentage / 25)];

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        if (buttonRef != null && buttonRef.current != null) {
          buttonRef.current.blur();
        }
        onClick();
      }}
      className={`block text-gray-200 rounded-sm text-sm uppercase tracking-wider font-semibold mb-4 relative min-w-full h-12 overflow-hidden ${bgColor}`}
    >
      <span className="relative text-white z-40">
        {percentage === 0 ? (
          props.text
        ) : (
          <span className="text-black">{timeChar}</span>
        )}
      </span>
      <span
        style={{ width: `${percentage}%` }}
        className="bg-black z-10 h-px absolute top-0 left-0"
      ></span>
    </button>
  );
};

export function GatherSouls() {
  const {
    abandonedSouls,
    setAbandonedSouls,
    logQueue,
    setLogQueue
  } = useContext(AppContext);

  const [collectionStatus, setCollectionStatus] = useState({
    initialized: false,
    progress: 0
  });

  const intervals = (CoolDowns.AbandonedSouls * 10) / 2;

  useEffect(() => {
    if (!collectionStatus.initialized) {
      return;
    }

    const timeOutId = setTimeout(() => {
      const nextProgress = collectionStatus.progress + 1;

      setCollectionStatus({
        initialized: nextProgress <= 100,
        progress: nextProgress <= 100 ? nextProgress : 0
      });

      if (collectionStatus.progress >= 100) {
        const bonus = Math.ceil(Math.random() * 100) >= 95 ? 2 : 0;
        const log = bonus > 0 ? ABANDONED_SOULS_HIGH : ABANDONED_SOULS_NORMAL;

        setLogQueue(createLog(logQueue, log));
        setAbandonedSouls(abandonedSouls + 1 + bonus);
      }
    }, intervals);

    return () => clearTimeout(timeOutId);
  });

  function gatherSouls() {
    if (collectionStatus.initialized) {
      return;
    }

    setCollectionStatus({
      initialized: true,
      progress: 0
    });
  }

  return (
    <ProgressButton
      text="Gather Souls"
      onClick={gatherSouls}
      percentage={collectionStatus.progress}
    />
  );
}

interface ActionsProps {
  children: any;
}

export function Actions(props: ActionsProps) {
  return <div className=" max-w-lg flex flex-col w-40">{props.children}</div>;
}
