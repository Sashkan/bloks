import { styled } from '@stitches/react'
import React from 'react'
import { EmptyBlocks } from '../EmptyBlocks'
import { useBlockContext } from './blocksContext'
import { Task } from './Task'

const Wrapper = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyledBlocks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  gridColumnGap: '0px',
  gridAutoFlow: 'row dense',
  gridRowGap: '0px',
  backgroundColor: '#222',
  gap: '8px',
  flex: 1,
  padding: '8px',
  aspectRatio: '1',
})

export const Blocks = () => {
  const { blocks } = useBlockContext()

  return (
    <Wrapper>
      <StyledBlocks>
        {blocks.map(block => (
          <Task task={block} key={block.id} />
        ))}
        <EmptyBlocks />
      </StyledBlocks>
    </Wrapper>
  )
}
