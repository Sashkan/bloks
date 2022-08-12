import { styled } from '@stitches/react'
import React from 'react'
import { Progress, ProgressIndicator } from '../../components/Progress'
import { useBlockContext } from '../blocks/blocksContext'

const StyledDaily = styled('div', {
  display: 'flex',
  gap: '8px',
  color: '#fff',
  alignItems: 'center',
})
const StyledLabel = styled('div', {
  display: 'flex',
  gap: '4px',
  alignItems: 'flex-end',
})

const DayStatus = () => {
  const { blocks } = useBlockContext()

  const totalWeight = blocks.reduce((acc, block) => acc + block.weight, 0)
  const doneBlocks = blocks.filter(block => block.status === 'done')
  const totalDoneWeight = doneBlocks.reduce(
    (acc, block) => acc + block.weight,
    0
  )

  const donePercentage = Math.round((totalDoneWeight / totalWeight) * 100)

  return (
    <StyledDaily>
      <StyledLabel>Productivity</StyledLabel>
      <Progress value={donePercentage}>
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - donePercentage}%)` }}
        />
      </Progress>

      <StyledLabel>Day management</StyledLabel>
      <Progress value={totalWeight}>
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - totalWeight}%)` }}
        />
      </Progress>
    </StyledDaily>
  )
}

export default DayStatus
