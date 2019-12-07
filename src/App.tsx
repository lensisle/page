import React from "react";
import "./styles/index.css";

// Screens
import TheVoidEntranceScreen from "./screens/TheVoidEntranceScreen";
import IntroScreen from "./screens/IntroScreen";
import FastEndScreen from "./screens/FastEndScreen";
import InsideTheVoidScreen from "./screens/InsideTheVoidScreen";
import UnsuccessfulConnectionScreen from "./screens/UnsuccessfulConnectionScreen";

// Global
import Actions from "./global/Actions/Actions";
import GatherSoulsAction from "./global/Actions/GatherSoulsAction";
import Achievements from "./global/Achievements";
import AppProvider from "./context";
import Trophies from "./global/Trophies";
import StatsPanel from "./global/Stats";
import Resources from "./global/Resources";
import LogPanel from "./global/LogPanel";
import GameMenu from "./global/GameMenu";
import Separator from "./global/Separator";

export default function App(): JSX.Element {
  return (
    <div className="overflow-hidden max-w-full max-h-screen overflow-hidden">
      <div className="ml-10 mt-10 flex">
        <AppProvider>
          <div className="mr-16 w-1/2 max-w-lg">
            <Trophies />
            <div className="min-w-full">
              <IntroScreen />
              <InsideTheVoidScreen />
              <TheVoidEntranceScreen />
              <FastEndScreen />
            </div>
            <Separator />
            <Resources />
            <StatsPanel />
            <div className="w-full mt-10 flex">
              <LogPanel />
              <GameMenu />
            </div>
          </div>
          <div className="h-screen">
            <Actions>
              <GatherSoulsAction />
            </Actions>
          </div>
          <Achievements />
        </AppProvider>
      </div>
    </div>
  );
}
