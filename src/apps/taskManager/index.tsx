import { styled } from '@stitches/react'
import React from 'react'
import { useBlockContext } from '../blocks/blocksContext'
import { TaskState } from '../TasksState'
import TaskViewer from '../TaskViewer'

const StyledWrapper = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const StyledTaskManager = styled('div', {
  width: '50%',
})

const TaskManager = () => {
  const { selectedBlockId } = useBlockContext()

  return (
    <StyledWrapper>
      <StyledTaskManager>
        {selectedBlockId ? <TaskViewer /> : <TaskState />}
      </StyledTaskManager>
    </StyledWrapper>
  )
}

export default TaskManager
