import React from "react";
import { T1, T2 } from "./trophies";

export const StepNames = {
  Introduction: Symbol(),
  Analysis: Symbol(),
  FastEnd: Symbol()
};

Object.freeze(StepNames);

const introductionStep = () => {
  const Message = ({ setStep, trophies, setTrophies }) => (
    <p>
      Hello <span className="font-semibold">visitor</span>, this is my{" "}
      <span className="font-semibold">old self</span> writing.
      <br /> If <span className="font-semibold">past</span> is immutable, an
      immutable version of <span className="font-hairline">me</span> is stored
      on this app.
      <br />
      <br />
      Do you want to know more about this?{" "}
      <button
        className="mr-1 inline-block hover:bg-gray-900 hover:text-gray-200"
        onClick={() => {
          setStep(StepNames.Analysis);
          const newTrophies = [...trophies, T1];
          setTrophies(newTrophies);
        }}
      >
        yes
      </button>
      or{" "}
      <button
        className="hover:bg-gray-900 hover:text-gray-200"
        onClick={() => setStep(StepNames.FastEnd)}
      >
        no
      </button>
      .
    </p>
  );

  return {
    Message,
    Actions: []
  };
};

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
    text: "Connect"
  };

  return {
    Message,
    Actions: [connect]
  };
};

const fastEndStep = () => {
  const Message = () => (
    <div>
      <p className="mb-5">That's fine. You can find me here too.</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/camvalde/">Linkedin</a>
        </li>
        <li>
          <a href="https://codepen.io/camkida">Codepen</a>
        </li>
        <li>
          <a href="https://c4m.itch.io">My Games</a>
        </li>
        <li>
          <a href="https://github.com/camiloei">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/camkida">Twitter</a>
        </li>
      </ul>
    </div>
  );

  return {
    Message,
    Actions: []
  };
};

export const StepFactory = stepName => {
  if (stepName === StepNames.Introduction) {
    return introductionStep();
  } else if (stepName === StepNames.Analysis) {
    return analysisStep();
  } else if (stepName === StepNames.FastEnd) {
    return fastEndStep();
  }
};
