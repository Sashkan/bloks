import { styled } from '@stitches/react'
import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 24px',
})

const StyledLove = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
})

const Footer = () => {
  return (
    <StyledHeader>
      <StyledLove>
        <p>
          made with <BsFillSuitHeartFill color='#ef0000' /> by sashkan
        </p>
      </StyledLove>
      <div>
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
      </div>
    </StyledHeader>
  )
}

export default Footer