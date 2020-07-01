import React, { useState, useEffect } from 'react'

const getData = ({ state, setState, dataSource }) => () => {
  const fetchData = async () => {
    try {
      const data = await fetch(dataSource) // eslint-disable-line
      const dataJSON = await data.json()
      setState({ ...state, loading: false, data: dataJSON })
    } catch (error) {
      setState({ ...state, loading: false, error: error.message })
    }
  }
  fetchData()
}

const withDataFetching = WrappedComponent => props => {
  const { dataSource } = props

  const [state, setState] = useState({
    data: [],
    loading: true,
    error: ''
  })

  useEffect(getData({ state, setState, dataSource }))

  const { data, loading, error } = state

  return (
    <WrappedComponent
      data={data}
      loading={loading}
      error={error}
      {...props}
    />
  )
}

export default withDataFetching
