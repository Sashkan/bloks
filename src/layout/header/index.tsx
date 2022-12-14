import { styled } from '@stitches/react'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useBlockContext } from '../../apps/blocks/blocksContext'
import DayStatus from '../../apps/DayStatus'
import { Button } from '../../components'
import Logo from '../../assets/bloks-logo.svg'
import { theme } from '../../theme'

const StyledLogo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  gap: '8px',
})

const StyledHeader = styled('header', {
  display: 'flex',
  color: theme.colors.light,
  backgroundColor: theme.colors.brand,
  justifyContent: 'space-between',
  padding: '12px 24px',
})

const StyledLogoImg = styled('img', {
  height: '24px',
  width: '24px',
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
        <StyledLogo>
          <StyledLogoImg src={Logo} alt='logo' />
          bloks
        </StyledLogo>
      </div>
      <RightHeader>
        <DayStatus />

        <Button variant='primary' onClick={() => setIsTaskFormOpen(true)}>
          <MdAdd /> Add task
        </Button>
      </RightHeader>
    </StyledHeader>
  )
}
