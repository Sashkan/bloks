// Your app...

import { violet } from '@radix-ui/colors'
import { styled } from '@stitches/react'

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  cursor: 'pointer',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
})
