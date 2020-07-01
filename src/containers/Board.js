import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Lane from '../components/Lane/Lane'

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const getTickets = (state, setState) => () => {
  const fetchData = async () => {
    try {
      const tickets = await fetch('../../assets/data.json') // eslint-disable-line
      const ticketsJSON = await tickets.json()
      setState({ ...state, loading: false, data: ticketsJSON })
    } catch (error) {
      setState({ ...state, loading: false, error: error.message })
    }
  }
  fetchData()
}
const Board = () => {
  const [state, setState] = useState({ data: [], loading: true, error: '' })
  useEffect(getTickets(state, setState))

  const lanes = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Review' },
    { id: 4, title: 'Done' }
  ]

  const { loading, data, error } = state
  return (
    <BoardWrapper>
      {lanes.map(lane => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tickets={data.filter(ticket => ticket.lane === lane.id)} />
      ))}
    </BoardWrapper>
  )
}

export default Board
