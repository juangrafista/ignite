import { useEffect } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

import React from 'react'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  })

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
