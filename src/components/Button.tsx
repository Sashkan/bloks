import { blackA, green, mauve, red, violet, whiteA } from '@radix-ui/colors'
import { styled } from '@stitches/react'

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  gap: '8px',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green11,
        color: whiteA.whiteA12,
        '&:hover': { backgroundColor: green.green10 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      grey: {
        backgroundColor: '#ddd',
        color: '#222',
        '&:hover': { backgroundColor: '#eee' },
        '&:focus': { boxShadow: `0 0 0 2px ${whiteA.whiteA6}` },
      },
      red: {
        backgroundColor: red.red11,
        color: whiteA.whiteA12,
        '&:hover': { backgroundColor: red.red10 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      ghost: {
        backgroundColor: 'transparent',
        padding: 0,
        color: whiteA.whiteA10,
        '&:hover': { color: whiteA.whiteA12 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
})
