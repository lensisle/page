import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepNames } from "../data";

export function FastEndScreen(props) {
  const { step } = useContext(AppContext);

  if (step !== StepNames.FastEnd) {
    return null;
  }

  return (
    <div>
      <p className="mb-5">That's fine. You can find me here.</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/camvalde/">Linkedin</a>
        </li>
        <li>
          <a href="https://codepen.io/camkida">Codepen</a>
        </li>
        <li>
          <a href="https://c4m.itch.io">Games</a>
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
}
