import React, { useContext } from "react";
import { AppContext } from "../context";
import { StepNames } from "../data";

const Trophy = ({ img, description }) => (
  <div>
    <img
      className="h-8 mr-6"
      src={img}
      alt={description}
      aria-label={description}
    />
  </div>
);

export function Trophies() {
  const { trophies = [], step } = useContext(AppContext);

  if (trophies.length < 1 || step <= StepNames.TheVoidEntrance) {
    return null;
  }

  return (
    <div className="flex mb-0 mb-10">
      {trophies.map(trophy => (
        <Trophy
          key={trophy.id}
          description={trophy.description}
          img={trophy.img}
        />
      ))}
    </div>
  );
}
