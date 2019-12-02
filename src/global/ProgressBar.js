import React from "react";

export const ProgressBar = props => {
  const { percentage, children } = props;

  return percentage > 0 ? (
    <div className="h-4 w-full bg-gray-300">
      <div
        style={{ width: `${percentage}%` }}
        className="bg-black h-full"
      ></div>
    </div>
  ) : (
    children
  );
};
