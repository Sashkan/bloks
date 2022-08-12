import { green } from '@radix-ui/colors'
import { styled } from '@stitches/react'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useBlockContext } from '../blocks/blocksContext'

const StyledEmptyState = styled('div', {})

const StyledCTA = styled('span', {
  color: green.green10,
  cursor: 'pointer',
  '&:hover': {
    color: green.green7,
  },
})

const StyledLine = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const EmptyState = () => {
  const { setIsTaskFormOpen } = useBlockContext()
  // const store = localStorage.getItem('postasks')

  // if (store) {
  //   return (
  //     <StyledEmptyState>
  //       <h1>Hi</h1>
  //       <p>You don't have anything planned for today</p>
  //       <StyledCTA onClick={() => setIsTaskFormOpen(true)}>
  //         Create your first task
  //       </StyledCTA>
  //     </StyledEmptyState>
  //   )
  // }

  return (
    <StyledEmptyState>
      <h1>Hi</h1>
      <StyledLine>
        <MdArrowBack /> This is your day
      </StyledLine>
      <p>Each block represents 10 minutes, and there are 100 blocks.</p>
      <p>That's about 16 hours</p>
      <p>Bloks help you make the most out of your day</p>
      <p>
        To get started,{' '}
        <StyledCTA onClick={() => setIsTaskFormOpen(true)}>
          create your first task
        </StyledCTA>
      </p>
    </StyledEmptyState>
  )
}
