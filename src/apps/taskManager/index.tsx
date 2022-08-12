import { styled } from '@stitches/react'
import React from 'react'
import { useBlockContext } from '../blocks/blocksContext'
import { TaskState } from '../TasksState'
import TaskViewer from '../TaskViewer'

const StyledTaskManager = styled('div', {
  padding: '24px',
  flex: 1,
})

const TaskManager = () => {
  const { selectedBlockId } = useBlockContext()

  return (
    <StyledTaskManager>
      {selectedBlockId ? <TaskViewer /> : <TaskState />}
    </StyledTaskManager>
  )
}

export default TaskManager
