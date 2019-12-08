import React, { useReducer, useContext } from "react";
import { StepName, PlayerStat, Trophy, Log, Stats } from "./data";

interface Action {
  type: string;
  payload: any;
}

interface AppState {
  step: StepName;
  souls: number;
  stats: Stats;
  trophies: Array<Trophy>;
  logs: Array<Log>;
}

interface Context {
  state: AppState;
  dispatch: (action: Action) => void;
}

const initialState: AppState = {
  step: StepName.Introduction,
  souls: 0,
  stats: {
    [PlayerStat.Attack]: 0,
    [PlayerStat.Spirit]: 0,
    [PlayerStat.Intelligence]: 0,
    [PlayerStat.Determination]: 0
  },
  trophies: [],
  logs: []
};

const contextDefaultValue: Context = {
  state: initialState,
  dispatch: () => {}
};

const AppContext = React.createContext<Context>(contextDefaultValue);

function globalReducer(state: AppState, action: Action) {
  switch (action.type) {
    case "setSouls":
      const amount: number = action.payload;
      return { ...state, souls: state.souls + amount };
    default:
      throw new Error();
  }
}

export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext(): Context {
  return useContext(AppContext);
}
