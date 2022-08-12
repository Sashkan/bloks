import { styled } from '@stitches/react'
import React from 'react'
import './App.css'
import { Blocks } from './apps/blocks'
import {
  BlockContextProvider,
  useBlocksState,
} from './apps/blocks/blocksContext'
import { TaskEditionForm } from './apps/TaskEditionForm'
import TaskManager from './apps/taskManager'
import { TaskForm } from './apps/tasks/TaskForm'
import Footer from './layout/Footer'
import { Header } from './layout/header'

const StyledApp = styled('div', {
  backgroundColor: '#222',
  fontFamily: "'Quicksand', serif",
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

const StyledContent = styled('div', {
  display: 'flex',
  backgroundColor: '#222',
  color: '#fff',
  fontFamily: "'Quicksand', serif",
  flex: 1,
  padding: '12px',
})

const App = () => {
  const blocksState = useBlocksState()

  return (
    <BlockContextProvider value={blocksState}>
      <StyledApp>
        <Header />
        <StyledContent>
          <Blocks />
          <TaskManager />
          <TaskEditionForm />
          <TaskForm />
        </StyledContent>
        <Footer />
      </StyledApp>
    </BlockContextProvider>
  )
}

export default App
