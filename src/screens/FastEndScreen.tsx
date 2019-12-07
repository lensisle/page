import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepName } from "../data";

export default function FastEndScreen() {
  const { step } = useContext(AppContext);

  if (step !== StepName.FastEnd) {
    return null;
  }

  return (
    <div>
      <p className="mb-5">Goodbye.</p>
      <p className="mb-2 underline">About me</p>
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
        <li>
          <a href="https://store.steampowered.com/app/510540/Long_Gone_Days/">
            Long Gone Days
          </a>
        </li>
      </ul>
    </div>
  );
}
