import React from "react";
import t1 from "./img/1.svg";
import t2 from "./img/2.svg";

export const T1 = {
  img: t1,
  id: "t1",
  name: "Black Diamond",
  description: "This is a black diamond trophy"
};

export const T2 = {
  img: t2,
  id: "t2",
  name: "Moon",
  description: "This is a moon trophy"
};

export const StepNames = {
  Introduction: Symbol(),
  Connections: Symbol(),
  FastEnd: Symbol()
};

Object.freeze(StepNames);

const analysisStep = () => {
  const Message = ({ setStep }) => (
    <div>
      <p>
        My gift to you is one{" "}
        <span className="font-semibold">connection token</span>.
      </p>
      <p>Please enjoy this present, if you want.</p>
    </div>
  );

  const connect = {
    text: "Send Signal"
  };

  return {
    Message,
    Actions: [connect]
  };
};
