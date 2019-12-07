import React, { useState } from "react";
import { StepName, PlayerStat, Trophy, Log, Stats } from "./data";

export interface ContextInterface {
  step: StepName;
  setStep: React.Dispatch<React.SetStateAction<StepName>>;
  trophies: Array<Trophy>;
  setTrophies: React.Dispatch<React.SetStateAction<Array<Trophy>>>;
  logQueue: Array<Log>;
  setLogQueue: React.Dispatch<React.SetStateAction<Array<Log>>>;
  abandonedSouls: number;
  setAbandonedSouls: React.Dispatch<React.SetStateAction<number>>;
  unlockedAchievements: Array<string>;
  setUnlockedAchievements: React.Dispatch<React.SetStateAction<Array<string>>>;
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
}

export const AppContext = React.createContext<ContextInterface>(
  {} as ContextInterface
);

const defaultStats: Stats = {
  [PlayerStat.Attack]: 0,
  [PlayerStat.Spirit]: 0,
  [PlayerStat.Intelligence]: 0,
  [PlayerStat.Determination]: 0
};

export function AppProvider(props: any) {
  const [step, setStep] = useState<StepName>(StepName.Introduction);
  const [trophies, setTrophies] = useState<Array<Trophy>>([]);
  const [logQueue, setLogQueue] = useState<Array<Log>>([]);
  const [abandonedSouls, setAbandonedSouls] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<
    Array<string>
  >([]);
  const [stats, setStats] = useState<Stats>(defaultStats);

  const value: ContextInterface = {
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
