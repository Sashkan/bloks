import { styled } from '@stitches/react'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useBlockContext } from '../../apps/blocks/blocksContext'
import DayStatus from '../../apps/DayStatus'
import { Button } from '../../components'

const StyledLogo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#fff',
})

const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 24px',
})

const RightHeader = styled('div', {
  display: 'flex',
  gap: '24px',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Header = () => {
  const { setIsTaskFormOpen } = useBlockContext()

  return (
    <StyledHeader>
      <div>
        <StyledLogo>bloks</StyledLogo>
      </div>
      <RightHeader>
        <DayStatus />

        <Button variant='green' onClick={() => setIsTaskFormOpen(true)}>
          <MdAdd /> Add task
        </Button>
      </RightHeader>
    </StyledHeader>
  )
}
