import React from 'react'
// styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux
import { useSelector } from 'react-redux'

const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail)

  return (
    <div>
      <CardShadow>
        <Detail>
          <Stats>
            <div className='rating'>
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <img src={game.background_image} alt='background_image' />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <Gallery>
            {screen.results.map((screen) => (
              <img src={screen.image} alt='screen_image' key={screen.id} />
            ))}
          </Gallery>
        </Detail>
      </CardShadow>
    </div>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: pink;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  top: 10%;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`
const Gallery = styled(motion.div)`
  img {
    margin-bottom: 0.5rem;
  }
`

export default GameDetail
