import { styled } from '@stitches/react'
import React from 'react'
import { Progress, ProgressIndicator } from '../../components/Progress'
import { theme } from '../../theme'
import { useBlockContext } from '../blocks/blocksContext'

const StyledDaily = styled('div', {
  display: 'flex',
  gap: '24px',
  color: theme.colors.light,
  alignItems: 'center',
})

const StyledDailyWrap = styled('div', {
  display: 'flex',
  gap: '8px',
  color: theme.colors.light,
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

  let donePercentage = Math.round((totalDoneWeight / totalWeight) * 100)

  if (blocks.length === 0) {
    donePercentage = 0
  }

  return (
    <StyledDaily>
      <StyledDailyWrap>
        <StyledLabel>Productivity</StyledLabel>
        <Progress value={donePercentage}>
          <ProgressIndicator
            style={{ transform: `translateX(-${100 - donePercentage}%)` }}
          />
        </Progress>
      </StyledDailyWrap>

      <StyledDailyWrap>
        <StyledLabel>Time usage</StyledLabel>
        <Progress value={totalWeight}>
          <ProgressIndicator
            style={{ transform: `translateX(-${100 - totalWeight}%)` }}
          />
        </Progress>
      </StyledDailyWrap>
    </StyledDaily>
  )
}

export default DayStatus
