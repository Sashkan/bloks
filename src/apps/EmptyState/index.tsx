import { styled } from '@stitches/react'
import React from 'react'
import { theme } from '../../theme'
import { useBlockContext } from '../blocks/blocksContext'

const StyledEmptyState = styled('div', {})

const StyledCTA = styled('span', {
  color: theme.colors.brand,
  cursor: 'pointer',
  '&:hover': {
    color: `${theme.colors.light}DD`,
  },
})

const StyledLine = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const EmptyState = () => {
  const { setIsTaskFormOpen } = useBlockContext()

  return (
    <StyledEmptyState>
      <h1>Hi</h1>
      <StyledLine>This is your day</StyledLine>
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
