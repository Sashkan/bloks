import { blackA, green, mauve, red, violet, whiteA } from '@radix-ui/colors'
import { styled } from '@stitches/react'
import { theme } from '../theme'

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
      primary: {
        backgroundColor: theme.colors.dark,
        color: whiteA.whiteA12,
        '&:hover': { backgroundColor: `${theme.colors.dark}DD` },
        '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.dark}` },
      },
      secondary: {
        backgroundColor: theme.colors.brand,
        color: whiteA.whiteA12,
        '&:hover': { backgroundColor: `${theme.colors.brand}DD` },
        '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.brand}` },
      },
      discourage: {
        backgroundColor: theme.colors.mid,
        color: theme.colors.dark,
        '&:hover': { backgroundColor: `${theme.colors.mid}DD` },
        '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.mid}` },
      },
      green: {
        backgroundColor: green.green11,
        color: whiteA.whiteA12,
        '&:hover': { backgroundColor: green.green10 },
        '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.brand}` },
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
        '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.brand}` },
      },
      ghost: {
        backgroundColor: 'transparent',
        padding: 0,
        color: whiteA.whiteA10,
        '&:hover': { color: whiteA.whiteA12 },
        '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.brand}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
})
