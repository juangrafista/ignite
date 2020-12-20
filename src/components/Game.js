import React from 'react'
// styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { popup } from '../animation'
// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'

const Game = ({ title, released, image, id }) => {
  const stringPathId = id.toString()
  // load detail Handler
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popup}
      initial='hidden'
      animate='show'
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{title}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={title}
        ></motion.img>
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
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
