import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import { createLog } from "../../utils";
import { CoolDowns } from "../../data";
import { ABANDONED_SOULS_HIGH, ABANDONED_SOULS_NORMAL } from "../../strings";

import ProgressButton from "../ProgressButton";

export default function GatherSoulsAction() {
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
