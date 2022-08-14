import { styled } from '@stitches/react'
import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { theme } from '../theme'

const StyledFooter = styled('footer', {
  display: 'flex',
  color: theme.colors.light,
  backgroundColor: theme.colors.brand,
  justifyContent: 'space-between',
  padding: '12px 24px',
})

const StyledLove = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.light,
})

const StyledLink = styled('a', {
  color: theme.colors.light,
})

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLove>
        <p>
          made with <BsFillSuitHeartFill color='#ef0000' /> by{' '}
          <StyledLink
            href='https://github.com/Sashkan'
            target='_blank'
            rel='noreferrer'
          >
            sashkan
          </StyledLink>
        </p>
      </StyledLove>
      <StyledLove>
        <a href='https://ko-fi.com/N4N8ECTWW' target='_blank' rel='noreferrer'>
          <img
            height='36'
            style={{
              border: '0px',
              height: '36px',
            }}
            src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3'
            alt='Buy Me a Coffee at ko-fi.com'
          />
        </a>
      </StyledLove>
    </StyledFooter>
  )
}

export default Footer
