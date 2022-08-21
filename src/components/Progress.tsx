import { styled } from '@stitches/react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { theme } from '../theme'

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  marginTop: '4px',
  overflow: 'hidden',
  background: theme.colors.dark,
  borderRadius: '99999px',
  width: 200,
  height: 10,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',
})

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: theme.colors.light,
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

// Exports
export const Progress = StyledProgress
export const ProgressIndicator = StyledIndicator
