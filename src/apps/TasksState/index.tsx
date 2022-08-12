import { styled } from '@stitches/react'
import React from 'react'
import { useBlockContext } from '../blocks/blocksContext'
import { EmptyState } from '../EmptyState'

type Props = {}

const StyledEmptyState = styled('div', {
  flex: 1,
  overflow: 'auto',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  h1: {
    margin: '0',
  },
  p: {
    textOverflow: 'ellipsis',
  },
})

const StyledState = styled(StyledEmptyState, {})

export const TaskState = (props: Props) => {
  const { blocks } = useBlockContext()

  const totalWeight = blocks.reduce((acc, block) => acc + block.weight, 0)
  const activeBlocks = blocks.filter(block => block.status === 'active')
  const doneBlocks = blocks.filter(block => block.status === 'done')

  if (blocks.length === 0) {
    return <EmptyState />
  }

  return (
    <StyledState>
      <h1>Hi there</h1>
      <p>
        You've completed {doneBlocks.length} out of {blocks.length} tasks today
      </p>
      <p>Your day is {totalWeight}% full</p>
      <p>
        Keep it up ! Only {activeBlocks.length} task
        {activeBlocks.length > 1 && 's'} remaining
      </p>
      <p>Make sure to drink water every once in a while</p>
    </StyledState>
  )
}
