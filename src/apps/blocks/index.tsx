import { styled } from '@stitches/react'
import React from 'react'
import { theme } from '../../theme'
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
  backgroundColor: theme.colors.mid,
  borderRadius: '4px',
  height: 'calc(100vh - 208px)',
  gap: '8px',
  padding: '8px',
  minHeight: '400px',
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
