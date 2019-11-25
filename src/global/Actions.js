import React, { useContext, useEffect, useState, useRef } from "react";

import { AppContext } from "../context";
import { StepNames, CoolDowns } from "../data";
import { createLog } from "../utils/logUtils";
import { BYTE_SHARDS_NORMAL, BYTE_SHARDS_HIGH } from "./Strings";

const ProgressButton = props => {
  const { percentage = 0, onClick } = props;

  const buttonRef = useRef();
  const bgColor = percentage > 0 ? "bg-white" : "bg-black";

  const timeMap = {
    [0]: "◴",
    [1]: "◷",
    [2]: "◶",
    [3]: "◵",
    [4]: "◴"
  };

  const timeChar = timeMap[Math.floor(percentage / 25)];

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        buttonRef.current.blur();
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

export function Actions(props) {
  const { step } = useContext(AppContext);

  if (step === StepNames.Introduction || step === StepNames.FastEnd) {
    return null;
  }

  return <div className=" max-w-lg flex flex-col w-40">{props.children}</div>;
}

export function ConnectAction(props) {
  const { byteShards, setByteShards, logQueue, setLogQueue } = useContext(
    AppContext
  );

  const [connectStatus, setConnectStatus] = useState({
    initialized: false,
    progress: 0
  });

  const intervals = (CoolDowns.ByteShards * 10) / 2;

  useEffect(() => {
    if (!connectStatus.initialized) {
      return;
    }

    const timeOutId = setTimeout(() => {
      const nextProgress = connectStatus.progress + 1;

      setConnectStatus({
        initialized: nextProgress <= 100,
        progress: nextProgress <= 100 ? nextProgress : 0
      });

      if (connectStatus.progress >= 100) {
        const bonus = Math.ceil(Math.random() * 100) >= 95 ? 2 : 0;
        const log = bonus > 0 ? BYTE_SHARDS_HIGH : BYTE_SHARDS_NORMAL;

        setLogQueue(createLog(logQueue, log));
        setByteShards(byteShards + 1 + bonus);
      }
    }, intervals);

    return () => clearTimeout(timeOutId);
  }, [connectStatus]);

  function gatherByteShard() {
    if (connectStatus.initialized) {
      return;
    }

    setConnectStatus({
      initialized: true,
      progress: 0
    });
  }

  return (
    <ProgressButton
      text="Connect"
      onClick={gatherByteShard}
      percentage={connectStatus.progress}
    />
  );
}
