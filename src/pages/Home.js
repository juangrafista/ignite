import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
// components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
// styling and animation
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { fadeIn } from '../animation'

const Home = () => {
  // get the current location
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  // get that data back
  const { popular, newGames, upcomingGames, search } = useSelector(
    (state) => state.games
  )

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {search.length ? (
          <div className='searched'>
            <h2>Searched Games</h2>
            <Games>
              {search.map((game) => (
                <Game
                  key={game.id}
                  title={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          <>
            <h2>Upcoming Games</h2>
            <Games>
              {upcomingGames.map((game) => (
                <Game
                  key={game.id}
                  title={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  key={game.id}
                  title={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  key={game.id}
                  title={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </>
        )}
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
  grid-row-gap: 5rem;
`

export default Home
