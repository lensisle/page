import React from "react";

interface ActionsProps {
  children: any;
}

export default function Actions(props: ActionsProps) {
  return <div className=" max-w-lg flex flex-col w-40">{props.children}</div>;
}
