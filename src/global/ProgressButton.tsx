import React, { useRef } from "react";

interface ProgressButtonProps {
  percentage: number;
  onClick: any;
  text: string;
}

export default function ProgressButton(props: ProgressButtonProps) {
  const { percentage = 0, onClick } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgColor = percentage > 0 ? "bg-white" : "bg-black";

  const timeMap: { [index: number]: string } = {
    [0]: "◴",
    [1]: "◷",
    [2]: "◶",
    [3]: "◵",
    [4]: "◴"
  };

  const timeChar: string = timeMap[Math.floor(percentage / 25)];

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        if (buttonRef != null && buttonRef.current != null) {
          buttonRef.current.blur();
        }
        onClick();
      }}
      className={`block text-gray-200 rounded-sm text-sm uppercase tracking-wider font-semibold mb-4 relative min-w-full h-12 overflow-hidden ${bgColor}`}
    >
      <span className="relative text-white z-40">
        {percentage === 0 ? (
          props.text
        ) : (
          <span className="text-black">{timeChar}</span>
        )}
      </span>
      <span
        style={{ width: `${percentage}%` }}
        className="bg-black z-10 h-px absolute top-0 left-0"
      ></span>
    </button>
  );
}
