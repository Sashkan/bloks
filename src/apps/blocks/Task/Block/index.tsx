import { styled } from '@stitches/react'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { Tooltip } from '../../../../components/Tooltip'
import { useBlockContext } from '../../blocksContext'

type Props = {
  weight: number
  color?: string
  taskId: string
  adding?: boolean
  message?: string
}

const StyledBlock = styled('div', {
  gridColumn: 'span 1',
  gridRow: 'span 1',
  aspectRatio: '1',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Block = ({ color, message }: Props) => {
  return (
    <Tooltip message={message}>
      <StyledBlock
        className='block'
        style={{
          backgroundColor: `${color}`,
        }}
      />
    </Tooltip>
  )
}

export const AddTaskBlock = () => {
  const { setIsTaskFormOpen } = useBlockContext()
  return (
    <Tooltip message='Create a new task'>
      <StyledBlock
        onClick={() => setIsTaskFormOpen(true)}
        css={{
          backgroundColor: '#fff',
          cursor: 'pointer',
          color: '#000',
          fontSize: '1.5rem',
          '&:hover': {
            backgroundColor: '#eee',
          },
        }}
      >
        <MdAdd />
      </StyledBlock>
    </Tooltip>
  )
}
