import { createContext, useContext, useEffect, useState } from 'react'
import { Block } from '../../types/types'

interface BlockContextInterface {
  blocks: Block[]
  editingBlockId: string | null
  setBlocks: (blocks: Block[]) => void
  addBlock: (block: Block) => void
  removeBlock: (taskId: string) => void
  editBlock: (block: Block) => void
  addedBlocks: number
  setAddedBlocks: (addedBlocks: number) => void
  selectedBlockId: string | null
  setSelectedBlockId: (block: string | null) => void
  setEditingBlockId: (blockId: string | null) => void
  isTaskFormOpen: boolean
  setIsTaskFormOpen: (isTaskFormOpen: boolean) => void
}

const BlockContext = createContext<BlockContextInterface>({
  blocks: [],
  setBlocks: () => {},
  addBlock: () => {},
  removeBlock: () => {},
  editBlock: () => {},
  editingBlockId: null,
  addedBlocks: 0,
  setAddedBlocks: () => {},
  selectedBlockId: null,
  setSelectedBlockId: () => {},
  setEditingBlockId: () => {},
  isTaskFormOpen: false,
  setIsTaskFormOpen: () => {},
})

export const useBlockContext = () => {
  const context = useContext(BlockContext)
  if (!context) {
    throw new Error(
      'useBlockContext must be used within a BlockContextProvider'
    )
  }
  return context
}

export const BlockContextProvider = BlockContext.Provider

export const useBlocksState = () => {
  const init = localStorage.getItem('postasks')
  const test = init ? JSON.parse(init) : []

  const [blocks, setBlocks] = useState<Block[]>(test)
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null)
  const [addedBlocks, setAddedBlocks] = useState(0)
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null)
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false)

  useEffect(() => {
    console.log(
      'useBlocksState: saving to localStorage with ',
      blocks.map(b => b.status)
    )
    localStorage.setItem('postasks', JSON.stringify(blocks))
  }, [blocks])

  const addBlock = (block: Block) => {
    setBlocks([...blocks, block])
    setEditingBlockId(null)
    setAddedBlocks(1)
  }

  const removeBlock = (taskId: string) => {
    setBlocks(blocks.filter(b => b.id !== taskId))
    if (blocks.length) {
      setSelectedBlockId(blocks[0].id)
    }
  }

  const editBlock = (block: Block) => {
    console.log('editBlock', block.status)

    setBlocks(
      blocks.map(b => {
        return b.id === block.id ? block : b
      })
    )
    setEditingBlockId(null)
  }

  return {
    blocks,
    setBlocks,
    addBlock,
    removeBlock,
    editingBlockId,
    editBlock,
    setEditingBlockId,
    addedBlocks,
    setAddedBlocks,
    selectedBlockId,
    setSelectedBlockId,
    isTaskFormOpen,
    setIsTaskFormOpen,
  }
}
