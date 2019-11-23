import React from "react";
import "./styles/index.css";

import { AppProvider } from "./context";
import { Trophies } from "./global/Trophies";
import { Resources } from "./global/Resources";
import { Actions } from "./global/Actions";
import { IntroScreen } from "./screens/IntroScreen";
import { FastEndScreen } from "./screens/FastEndScreen";

export default function App() {
  return (
    <div className="ml-10 mt-10 flex">
      <AppProvider>
        <div className="mr-16 w-1/2">
          <Trophies />
          <IntroScreen />
          <FastEndScreen />
          <Resources />
        </div>
        <div className="bg-gray-200 h-screen">
          <Actions />
        </div>
      </AppProvider>
    </div>
  );
}
