import React, { useState } from "react";
import { StepNames } from "./data";

export const AppContext = React.createContext();

export function AppProvider(props) {
  const [step, setStep] = useState(StepNames.Introduction);
  const [trophies, setTrophies] = useState();

  const value = {
    step,
    setStep,
    trophies,
    setTrophies
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
