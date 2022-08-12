import { styled } from '@stitches/react'
import { green } from '@radix-ui/colors'
import * as ProgressPrimitive from '@radix-ui/react-progress'

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: green.green12,
  borderRadius: '99999px',
  width: 200,
  height: 10,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',
})

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: green.green10,
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

// Exports
export const Progress = StyledProgress
export const ProgressIndicator = StyledIndicator
