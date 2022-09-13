import { styled } from "@stitches/react";
import React, { useCallback } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../components/ContextMenu";
import { blink } from "../../../components/keyframes";
import { Block } from "../../../types/types";
import { ColorPicker } from "../../ColorPicker/index.tsx";
import { useBlockContext } from "../blocksContext";
import { Block as BlockElement } from "./Block";

type Props = {
  task: Block;
};

const StyledTask = styled("div", {
  display: "contents",
  cursor: "pointer",
  opacity: "0",
  ".block": {
    opacity: "0.7",
    transition: "opacity 0.1s ease-in-out",
  },
  "&:hover": {
    opacity: 1,
    ".block": {
      opacity: "1",
    },
  },
  variants: {
    selected: {
      true: {
        ".block": {
          animation: `${blink} 1.5s ease-in-out infinite`,
        },
      },
    },
  },
});

const StyledTest = styled(ContextMenuTrigger, {
  display: "contents",
});

export const Task = ({ task }: Props) => {
  const fakeArray = Array.from(Array(task.weight));
  const {
    removeBlock,
    editBlock,
    setSelectedBlockId,
    setEditingBlockId,
    selectedBlockId,
  } = useBlockContext();

  const setColor = useCallback(
    (color: string) => {
      editBlock({
        ...task,
        color,
      });
    },
    [editBlock, task]
  );

  return (
    <ContextMenu>
      <StyledTest>
        <StyledTask
          onClick={() => setSelectedBlockId(task.id)}
          selected={selectedBlockId === task.id}
        >
          {fakeArray.map((e, i) => {
            return (
              <BlockElement
                key={i}
                weight={1}
                color={task.color}
                taskId={task.id}
                message={task.title}
              />
            );
          })}
        </StyledTask>
      </StyledTest>
      <ContextMenuContent sideOffset={5} align='end'>
        <ContextMenuItem onClick={() => setEditingBlockId(task.id)}>
          Edit task
        </ContextMenuItem>
        <ContextMenuItem onClick={() => removeBlock(task.id)}>
          Cancel task
        </ContextMenuItem>
        <hr />
        <ColorPicker onSelect={setColor} />
      </ContextMenuContent>
    </ContextMenu>
  );
};
