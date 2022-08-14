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
      <Completion done={doneBlocks.length} all={blocks.length} />
      <Fullfilment totalWeight={totalWeight} />
      <TaskCompletion activeBlocks={activeBlocks.length} />
      <p>Make sure to drink water every once in a while</p>
    </StyledState>
  )
}

const Completion = ({ done, all }: { done: number; all: number }) => {
  if (done === all) {
    return <p>You've completed all of your tasks today !!</p>
  }

  return (
    <p>
      You've completed {done} out of {all} tasks today
    </p>
  )
}

const Fullfilment = ({ totalWeight }: { totalWeight: number }) => {
  if (totalWeight === 0) {
    return <p>You haven't planned any tasks today</p>
  }

  if (totalWeight === 100) {
    return <p>Your day is fully booked!</p>
  }

  return <p>Your day is {totalWeight}% full</p>
}

const TaskCompletion = ({ activeBlocks }: { activeBlocks: number }) => {
  if (activeBlocks === 0) {
    return null
  }

  return (
    <p>
      Keep it up ! Only {activeBlocks} task
      {activeBlocks > 1 && 's'} remaining
    </p>
  )
}
