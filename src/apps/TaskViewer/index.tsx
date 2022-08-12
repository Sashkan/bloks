import { keyframes, styled } from '@stitches/react'
import React, { useCallback } from 'react'
import { MdEdit } from 'react-icons/md'
import { Button } from '../../components'
import { useBlockContext } from '../blocks/blocksContext'

const contentShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const StyledTitle = styled('div', {
  display: 'flex',
  gap: '8px',
  margin: '0',
  alignItems: 'flex-end',
  h1: {
    margin: '0',
  },
})

const StyledTaskViewer = styled('div', {
  flex: 1,
  animation: `${contentShow} 0.1s ease-in-out`,
})

const StyledTaskViewerHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const StyledTaskViewerFooter = styled(StyledTaskViewerHeader, {
  justifyContent: 'flex-start',
  gap: '8px',
})

const StyledCloseButton = styled('button', {
  fontSize: '16px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#ddd',
  fontFamily: "'Quicksand', serif",
  borderRadius: '4px',
  fontWeight: 'bold',
  padding: '0',
  outline: 'none',
  '&:hover': {
    color: '#fff',
  },
})

const StyledContent = styled('div', {
  padding: '16px 0',
  flex: 1,
})

const TaskViewer = () => {
  const {
    setSelectedBlockId,
    editBlock,
    blocks,
    removeBlock,
    selectedBlockId,
    setEditingBlockId,
  } = useBlockContext()

  // const task = useMemo(() => {
  //   return blocks.find(block => block.id === selectedBlockId)
  // }, [blocks, selectedBlockId])

  const task = blocks.find(block => block.id === selectedBlockId)

  const updateStatus = useCallback(() => {
    if (task) {
      editBlock({
        ...task,
        status: task.status === 'active' ? 'done' : 'active',
      })
    }
  }, [editBlock, task])

  if (!task) {
    return null
  }

  return (
    <StyledTaskViewer>
      <StyledTaskViewerHeader>
        <StyledTitle>
          <h1>{task.title}</h1>
          <Button
            variant='ghost'
            onClick={() => setEditingBlockId(task.id)}
            css={{ fontSize: '16px' }}
          >
            <MdEdit />
          </Button>
        </StyledTitle>
        <StyledCloseButton onClick={() => setSelectedBlockId(null)}>
          Close
        </StyledCloseButton>
      </StyledTaskViewerHeader>
      {task.content ? (
        <StyledContent>{task.content}</StyledContent>
      ) : (
        <StyledContent>No description was provided for this task</StyledContent>
      )}
      <StyledTaskViewerFooter>
        {task.status === 'done' ? (
          <Button variant='grey' onClick={() => updateStatus()}>
            Mark as active
          </Button>
        ) : (
          <Button variant='green' onClick={() => updateStatus()}>
            Mark as done
          </Button>
        )}
        <Button variant='red' onClick={() => removeBlock(task.id)}>
          Cancel
        </Button>
      </StyledTaskViewerFooter>
    </StyledTaskViewer>
  )
}

export default TaskViewer
