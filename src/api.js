// Base Url
const base_url = 'https://api.rawg.io/api/'

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

// Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=9`
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-release&page_size=9`

export const popularGamesURL = () => `${base_url}${popularGames}`
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`
export const newGamesURL = () => `${base_url}${newGames}`

// Game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`

// screenshots
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`
