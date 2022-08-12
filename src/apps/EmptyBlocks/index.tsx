import { styled } from '@stitches/react'
import React from 'react'
import { blink } from '../../components/keyframes'
import { useBlockContext } from '../blocks/blocksContext'
import { AddTaskBlock, Block } from '../blocks/Task/Block'

type Props = {}

const StyledEmptyBlocks = styled('div', {
  display: 'contents',
})

const StyledAddedBlocks = styled('div', {
  display: 'contents',
  '.block': {
    backgroundColor: '#284947 !important',
    animation: `${blink} 1.5s ease-in-out infinite`,
  },
})

export const EmptyBlocks = (props: Props) => {
  const { blocks, addedBlocks, isTaskFormOpen } = useBlockContext()

  const totalBlocks = blocks.reduce((total, block) => {
    return total + block.weight
  }, 0)

  let blocksToBeAdded = typeof addedBlocks === 'number' ? addedBlocks : 0
  if (totalBlocks === 100) {
    blocksToBeAdded = 0
  }

  if (isNaN(blocksToBeAdded)) {
    blocksToBeAdded = 0
  }

  const shouldDisplayAdder = totalBlocks < 100 && !isTaskFormOpen
  const addMoreOffset = shouldDisplayAdder ? 0 : 1

  // Remove added blocks, toBeAdded blocks and adder
  const totalEmpty = 100 - totalBlocks - blocksToBeAdded - addMoreOffset
  const emptyBlocksArray = Array.from(Array(totalEmpty))
  const addedBlocksArray = Array.from(Array(blocksToBeAdded))

  return (
    <StyledEmptyBlocks>
      {shouldDisplayAdder && <AddTaskBlock />}
      <StyledAddedBlocks>
        {isTaskFormOpen &&
          addedBlocksArray.map((_, i) => {
            return (
              <Block key={i} adding weight={1} color='#574' taskId='empty' />
            )
          })}
      </StyledAddedBlocks>
      {emptyBlocksArray.map((_, i) => {
        return (
          <Block
            key={i}
            weight={1}
            color='#111'
            taskId='empty'
            message='free time'
          />
        )
      })}
    </StyledEmptyBlocks>
  )
}
