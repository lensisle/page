import React, { useContext } from "react";
import { AppContext } from "../context";

const Trophy = (props: { img: string; description: string }) => (
  <div>
    <img
      className="h-8 mr-6"
      src={props.img}
      alt={props.description}
      aria-label={props.description}
    />
  </div>
);

export function Trophies() {
  const { trophies } = useContext(AppContext);

  if (trophies.length < 1) {
    return null;
  }

  console.log("trophies", trophies);

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
