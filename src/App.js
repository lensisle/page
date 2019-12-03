import React from "react";
import "./styles/index.css";

import { AppProvider } from "./context";
import { Trophies } from "./global/Trophies";
import { Stats } from "./global/Stats";
import { Resources } from "./global/Resources";
import { Actions, GatherSouls } from "./global/Actions";
import { IntroScreen } from "./screens/IntroScreen";
import { FastEndScreen } from "./screens/FastEndScreen";
import { ConnectionGiftScreen } from "./screens/ConnectionGiftScreen";
import { Achievements } from "./global/Achievements";
import { Log } from "./global/Log";
import { GameMenu } from "./global/GameMenu";
import { UnsuccessfulConnectionScreen } from "./screens/UnsuccessfulConnectionScreen";
import { Separator } from "./global/Separator";
import { TheVoidEntranceScreen } from "./screens/TheVoidEntranceScreen";

export default function App() {
  return (
    <div className="overflow-hidden max-w-full max-h-screen overflow-hidden">
      <div className="ml-10 mt-10 flex">
        <AppProvider>
          <div className="mr-16 w-1/2 max-w-lg">
            <Trophies />
            <div className="min-w-full">
              <IntroScreen />
              <ConnectionGiftScreen />
              <FastEndScreen />
              <UnsuccessfulConnectionScreen />
              <TheVoidEntranceScreen />
            </div>
            <Separator />
            <Resources />
            <Stats />
            <div className="w-full mt-10 flex">
              <Log />
              <GameMenu />
            </div>
          </div>
          <div className="h-screen">
            <Actions>
              <GatherSouls />
            </Actions>
          </div>
          <Achievements />
        </AppProvider>
      </div>
    </div>
  );
}
