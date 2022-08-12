import { styled } from '@stitches/react'
import React from 'react'
import { EmptyBlocks } from '../EmptyBlocks'
import { useBlockContext } from './blocksContext'
import { Task } from './Task'

type Props = {}

const StyledBlocks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  gridColumnGap: '0px',
  gridAutoFlow: 'row dense',
  gridRowGap: '0px',
  backgroundColor: '#222',
  gap: '8px',
  padding: '8px',
  aspectRatio: '1',
  height: 'calc(80vh - 16px)',
})

export const Blocks = (props: Props) => {
  const { blocks } = useBlockContext()

  return (
    <StyledBlocks>
      {blocks.map(block => (
        <Task task={block} key={block.id} />
      ))}
      <EmptyBlocks />
    </StyledBlocks>
  )
}
