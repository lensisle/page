import React, { useContext } from "react";
import { AppContext } from "../context";

const Trophy = ({ img, description }) => (
  <div id="trophies" className="flex mb-10">
    <img
      className="h-8 mr-6"
      src={img}
      alt={description}
      aria-label={description}
    />
  </div>
);

export function Trophies() {
  const { trophies = [] } = useContext(AppContext);

  if (trophies.length < 1) {
    return null;
  }

  return (
    <div className="flex mb-10">
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
