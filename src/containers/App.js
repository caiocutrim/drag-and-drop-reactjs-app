import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Board from './Board'
import Header from '../components/Header/Header'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const AppWrapper = styled.div`
  text-align: center;
`

const lanes = [
  { id: 1, title: 'To do' },
  { id: 2, title: 'In progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' }
]
const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Board lanes={lanes} dataSource={'../../assets/data.json'} />
    </AppWrapper>
  </>
)

export default App
