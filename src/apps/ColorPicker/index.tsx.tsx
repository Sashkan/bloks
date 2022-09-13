import { styled } from "@stitches/react";
import React from "react";

type Props = {
  onSelect: (color: string) => void;
};

const StyledColorPicker = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "4px",
  gridRowGap: "4px",
  width: "fit-content",
});

const StyledColor = styled("div", {
  borderRadius: "4px",
  height: "16px",
  width: "16px",
  cursor: "pointer",
});

const availableColors = [
  "#854839",
  "#700",
  "#007",
  "#070",
  "#EC994B",
  "#FFF56D",
  "#6A67CE",
  "#FF008E",
];

export const ColorPicker = ({ onSelect }: Props) => {
  return (
    <StyledColorPicker>
      {availableColors.map((color) => (
        <StyledColor
          onClick={() => onSelect(color)}
          css={{ backgroundColor: color }}
        />
      ))}
    </StyledColorPicker>
  );
};
