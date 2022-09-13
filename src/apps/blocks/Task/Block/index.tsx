import { styled } from "@stitches/react";
import React from "react";
import { MdAdd } from "react-icons/md";
import { Tooltip } from "../../../../components/Tooltip";
import { theme } from "../../../../theme";
import { useBlockContext } from "../../blocksContext";

type Props = {
  weight: number;
  color?: string;
  taskId: string;
  adding?: boolean;
  message?: string;
};

const StyledBlock = styled("div", {
  gridColumn: "span 1",
  gridRow: "span 1",
  aspectRatio: "1",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.2s",
});

export const Block = ({ color, message }: Props) => {
  return (
    <Tooltip message={message}>
      <StyledBlock
        className='block'
        style={{
          backgroundColor: `${color}`,
        }}
      />
    </Tooltip>
  );
};

export const AddTaskBlock = () => {
  const { setIsTaskFormOpen } = useBlockContext();
  return (
    <Tooltip message='Create a new task'>
      <StyledBlock
        onClick={() => setIsTaskFormOpen(true)}
        css={{
          backgroundColor: theme.colors.light,
          cursor: "pointer",
          color: "#000",
          "&:hover": {
            backgroundColor: theme.colors.brand,
            color: theme.colors.light,
          },
        }}
      >
        <MdAdd />
      </StyledBlock>
    </Tooltip>
  );
};
