import React, { useState } from "react";
import { StepNames, PlayerStat } from "./data";

export const AppContext = React.createContext();

const defaultStats = {
  [PlayerStat.Attack]: 0,
  [PlayerStat.Spirit]: 0,
  [PlayerStat.Intelligence]: 0,
  [PlayerStat.Determination]: 0
};

export function AppProvider(props) {
  const [step, setStep] = useState(StepNames.Introduction);
  const [trophies, setTrophies] = useState();
  const [logQueue, setLogQueue] = useState([]);
  const [abandonedSouls, setAbandonedSouls] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [stats, setStats] = useState(defaultStats);

  const value = {
    step,
    setStep,
    trophies,
    setTrophies,
    logQueue,
    setLogQueue,
    abandonedSouls,
    setAbandonedSouls,
    unlockedAchievements,
    setUnlockedAchievements,
    stats,
    setStats
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
