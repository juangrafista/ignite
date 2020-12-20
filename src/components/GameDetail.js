import React from 'react'
// styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// utils
import { smallImage } from '../util'
// Images
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
// star images
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({ pathId }) => {
  const history = useHistory()
  // Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  // Get Platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 5':
        return playstation
      case 'PlayStation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'PC':
        return steam
      case 'Nintendo Switch':
        return nintendo
      case 'iOS':
        return apple
      default:
        return gamepad
    }
  }

  // get data
  const { screen, game, isLoading } = useSelector((state) => state.detail)

  // get stars logic
  const getStars = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star-full' key={i} src={starFull}></img>)
      } else {
        stars.push(<img alt='star-empty' key={i} src={starEmpty}></img>)
      }
    }
    return stars
  }

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail LayoutId={pathId}>
            <Stats>
              <div className='rating'>
                <motion.h3 LayoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: </p>
                {getStars(game.rating)}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                LayoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 640)}
                alt='background_image'
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 640)}
                  alt='screen_image'
                  key={screen.id}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
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
  z-index: 5;
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
  z-index: 10;
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
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
    /* margin-bottom: 0.5rem; */
  }
`

export default GameDetail
