import React, { useState } from "react";
import { StepNames } from "./data";

export const AppContext = React.createContext();

const defaultStats = {
  attack: 0,
  resilience: 0,
  inteligence: 0,
  determination: 0
};

export function AppProvider(props) {
  const [step, setStep] = useState(StepNames.Introduction);
  const [trophies, setTrophies] = useState();
  const [logQueue, setLogQueue] = useState([]);
  const [byteShards, setByteShards] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [stats, setStats] = useState(defaultStats);

  const value = {
    step,
    setStep,
    trophies,
    setTrophies,
    logQueue,
    setLogQueue,
    byteShards,
    setByteShards,
    unlockedAchievements,
    setUnlockedAchievements,
    stats,
    setStats
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
