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

const AppWrapper = styled('div', {
  backgroundColor: '#222',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

const StyledApp = styled('div', {
  fontFamily: "'Quicksand', serif",
  display: 'flex',
  flex: 1,
  width: '100%',
  minHeight: '600px',
  flexDirection: 'column',
})

const StyledContent = styled('div', {
  display: 'flex',
  backgroundColor: '#222',
  gap: '24px',
  color: '#fff',
  fontFamily: "'Quicksand', serif",
  flex: 1,
  padding: '12px',
  maxHeight: 'calc(100vh - 48px)',
})

const App = () => {
  const blocksState = useBlocksState()

  return (
    <BlockContextProvider value={blocksState}>
      <TaskEditionForm />
      <TaskForm />
      <AppWrapper>
        <StyledApp>
          <Header />
          <StyledContent>
            <Blocks />
            <TaskManager />
          </StyledContent>
          <Footer />
        </StyledApp>
      </AppWrapper>
    </BlockContextProvider>
  )
}

export default App
