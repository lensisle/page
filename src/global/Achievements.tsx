import React, { useContext } from "react";
import { AppContext } from "../context";

import { StepName, AchievementsList } from "../data";
import { tryPreventRender } from "../utils";

export default function Achievements() {
  const { step, unlockedAchievements } = useContext(AppContext);

  if (tryPreventRender(step, [StepName.Introduction])) {
    return null;
  }

  return (
    <div className="ml-16">
      <p className="mb-4">Achievements</p>
      <ul>
        {AchievementsList.map((achievement, idx) => (
          <li key={idx} className="text-sm">
            <span className="italic">{achievement}</span>
            {unlockedAchievements.includes(achievement) ? " [✓]" : " [Locked]"}
          </li>
        ))}
      </ul>
    </div>
  );
}
