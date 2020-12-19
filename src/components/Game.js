import React from 'react'
// styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'

const Game = ({ title, released, image, id }) => {
  // load detail Handler
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

  return (
    <StyledGames onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{title}</h3>
        <p>{released}</p>
        <img src={image} alt={title}></img>
      </Link>
    </StyledGames>
  )
}

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.14);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    padding: 0;
  }
`

export default Game
