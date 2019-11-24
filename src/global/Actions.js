import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../context";
import { StepNames, CoolDowns } from "../data";
import { createLog } from "../utils/logUtils";

const ActionButton = props => {
  const { percentage = 0, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="block bg-black text-gray-200 rounded-sm text-sm uppercase tracking-wider font-semibold mb-4 relative min-w-full h-12 overflow-hidden"
    >
      <span className="relative text-white z-40">
        {percentage === 0 ? props.text : "..."}
      </span>
      <div
        style={{ left: 0, width: `${percentage}%` }}
        className="bg-gray-800 absolute top-0 left-0 bottom-0 z-10"
      ></div>
    </button>
  );
};

export function Actions(props) {
  const { step, byteShards, setByteShards, logQueue, setLogQueue } = useContext(
    AppContext
  );
  const [connectStatus, setConnectStatus] = useState({
    initialized: false,
    progress: 0
  });

  function gatherByteShard() {
    if (connectStatus.initialized) {
      return;
    }

    setConnectStatus({
      initialized: true,
      progress: 0
    });
  }

  useEffect(() => {
    if (!connectStatus.initialized) {
      return;
    }

    const intervalId = setInterval(() => {
      const nextProgress = connectStatus.progress + 1;

      if (nextProgress <= 100) {
        setConnectStatus({
          initialized: true,
          progress: nextProgress
        });
      } else {
        setConnectStatus({
          initialized: false,
          progress: 0
        });
        setLogQueue(
          createLog(
            logQueue,
            "A link was opened through the void, nothing but byte shards were retrieved."
          )
        );
        setByteShards(byteShards + 1);
      }
    }, CoolDowns.ByteShards * 10);

    return () => clearInterval(intervalId);
  }, [connectStatus]);

  if (step === StepNames.Introduction || step === StepNames.FastEnd) {
    return null;
  }

  return (
    <div className=" max-w-lg flex flex-col w-40">
      <ActionButton
        text="Connect"
        onClick={gatherByteShard}
        percentage={connectStatus.progress}
      />
      <ActionButton text="Build" />
    </div>
  );
}
