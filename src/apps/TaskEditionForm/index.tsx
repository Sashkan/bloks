import { green, violet, whiteA } from '@radix-ui/colors'
import { styled } from '@stitches/react'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MdClose } from 'react-icons/md'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../../components/Dialog'
import { Separator } from '../../components/Separator'
import { useBlockContext } from '../blocks/blocksContext'

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

const StyledWrapper = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
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
  backgroundColor: '#000',
  color: '#fff',
  fontFamily: "'Quicksand', serif",
  borderRadius: '4px',
  fontWeight: 'bold',
  padding: '8px',
  outline: 'none',
})

const StyledTextarea = styled('textarea', {
  fontSize: '16px',
  border: 'none',
  backgroundColor: '#000',
  color: '#fff',
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
  backgroundColor: green.green11,
  color: whiteA.whiteA12,
  '&:hover': { backgroundColor: green.green10 },
  '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
})

export const TaskEditionForm = () => {
  const { blocks, editBlock, editingBlockId, setEditingBlockId } =
    useBlockContext()

  const editedBlock = blocks.find(({ id }) => id === editingBlockId)

  const { register, handleSubmit, reset } = useForm<BlockInput>({
    defaultValues: {
      title: editedBlock?.title || '',
      content: editedBlock?.content || '',
      weight: editedBlock?.weight || 0,
    },
  })

  useEffect(() => {
    reset({
      title: editedBlock?.title || '',
      content: editedBlock?.content || '',
      weight: editedBlock?.weight || 0,
    })
  }, [editedBlock, reset])

  const onSubmit: SubmitHandler<BlockInput> = data => {
    if (editedBlock) {
      editBlock({
        ...editedBlock,
        ...data,
      })
    }
    reset()
  }

  const totalBlocks = blocks.reduce((total, block) => {
    return total + block.weight
  }, 0)

  if (!editedBlock) {
    return null
  }

  return (
    <Dialog open={!!editingBlockId}>
      <DialogContent
        onPointerDownOutside={() => setEditingBlockId(null)}
        onEscapeKeyDown={() => setEditingBlockId(null)}
        onInteractOutside={() => setEditingBlockId(null)}
      >
        <DialogTitle>Edit {editedBlock.title}</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
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

            <label htmlFor='complexity'>Complexity</label>
            <StyledTaskFormInput
              id='complexity'
              defaultValue={1}
              {...register('weight', { required: true, valueAsNumber: true })}
              type='number'
              placeholder='weight'
              min={0}
              max={100 - totalBlocks}
            />
            <Separator css={{ margin: '15px 0' }} />
            <StyledSubmitButton type='submit' value='Save changes' />
          </StyledTaskForm>
        </StyledWrapper>
        <DialogClose asChild>
          <IconButton
            aria-label='Close'
            onClick={() => setEditingBlockId(null)}
          >
            <MdClose />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  )
}
