import React from "react";
import { IconProps } from "./types";

const LanguageIcon = ({ height = 24, width = 24, rotation = 0 }: IconProps) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
          stroke="currentColor"
          stroke-width="2"
          d="m9 4 8 8-8 8"
      />
    </svg>
  );
};

export default LanguageIcon;
