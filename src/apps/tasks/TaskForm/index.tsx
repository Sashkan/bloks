import { green, violet, whiteA } from '@radix-ui/colors'
import { styled } from '@stitches/react'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MdClose, MdInfo } from 'react-icons/md'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../../../components/Dialog'
import { Tooltip } from '../../../components/Tooltip'
import { theme } from '../../../theme'
import { taskColors } from '../../../utils'
import { useBlockContext } from '../../blocks/blocksContext'

type BlockInput = {
  title: string
  content: string
  weight: number
}

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
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

const CenteredFlex = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',
})

const StyledWrapper = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledAddMore = styled('div', {
  display: 'flex',
  gap: '4px',
})

const StyledTaskForm = styled('form', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '8px',
})

const StyledTaskFormInput = styled('input', {
  fontSize: '16px',
  border: 'none',
  backgroundColor: theme.colors.mid,
  color: theme.colors.dark,
  fontFamily: "'Quicksand', serif",
  borderRadius: '4px',
  fontWeight: 'bold',
  padding: '8px',
  outline: 'none',
})

const StyledTextarea = styled('textarea', {
  fontSize: '16px',
  border: 'none',
  backgroundColor: theme.colors.mid,
  color: theme.colors.dark,
  fontFamily: "'Quicksand', serif",
  borderRadius: '4px',
  fontWeight: 'bold',
  padding: '8px',
  outline: 'none',
})

const StyledSubmitButton = styled('input', {
  all: 'unset',
  display: 'inline-flex',
  gap: '8px',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  backgroundColor: theme.colors.brand,
  color: whiteA.whiteA12,
  '&:hover': { backgroundColor: green.green10 },
  '&:focus': { boxShadow: `0 0 0 2px ${theme.colors.brand}` },
})

export const TaskForm = () => {
  const [shouldAddMore, setShouldAddMore] = useState(false)
  const { register, handleSubmit, watch, reset } = useForm<BlockInput>({
    defaultValues: {
      weight: 1,
    },
  })
  const {
    blocks,
    addBlock,
    setAddedBlocks,
    isTaskFormOpen,
    setIsTaskFormOpen,
  } = useBlockContext()
  const onSubmit: SubmitHandler<BlockInput> = data => {
    const color = taskColors[Math.floor(Math.random() * taskColors.length)]

    addBlock({
      id: Math.random().toString(),
      content: data.content,
      title: data.title,
      color,
      weight: data.weight,
      status: 'active',
    })
    reset()
    if (!shouldAddMore) {
      setIsTaskFormOpen(false)
    }
  }

  const totalBlocks = blocks.reduce((total, block) => {
    return total + block.weight
  }, 0)

  const test = watch('weight')

  useEffect(() => {
    setAddedBlocks(test)
  }, [setAddedBlocks, test])

  return (
    <Dialog open={isTaskFormOpen}>
      <DialogContent
        onPointerDownOutside={() => setIsTaskFormOpen(false)}
        onEscapeKeyDown={() => setIsTaskFormOpen(false)}
        onInteractOutside={() => setIsTaskFormOpen(false)}
      >
        <DialogTitle>Add a task</DialogTitle>
        <DialogDescription>What should you do today ?</DialogDescription>
        <StyledWrapper>
          <StyledTaskForm onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor='title'>Title</label>
            <StyledTaskFormInput
              id='title'
              placeholder='Something short and meaningful'
              autoFocus
              {...register('title', { required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor='content'>Description</label>
            <StyledTextarea
              placeholder='What should you do ?'
              id='content'
              {...register('content')}
            />

            <CenteredFlex>
              <label htmlFor='complexity'>Complexity</label>
              <Tooltip message='How much time will it take ? each point stands for 10 minutes'>
                <CenteredFlex css={{ alignItems: 'flex-end' }}>
                  <MdInfo size={14} />
                </CenteredFlex>
              </Tooltip>
            </CenteredFlex>
            <StyledTaskFormInput
              id='complexity'
              {...register('weight', { required: true, valueAsNumber: true })}
              type='number'
              placeholder='weight'
              min={0}
              max={100 - totalBlocks}
            />

            <StyledAddMore>
              <input
                type='checkbox'
                id='addMore'
                onChange={() => setShouldAddMore(!shouldAddMore)}
              />
              <label htmlFor='addMore'>Add more</label>
            </StyledAddMore>

            <StyledSubmitButton type='submit' />
          </StyledTaskForm>
        </StyledWrapper>
        <DialogClose asChild>
          <IconButton
            aria-label='Close'
            onClick={() => setIsTaskFormOpen(false)}
          >
            <MdClose />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  )
}
