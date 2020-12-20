const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  search: [],
}

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcomingGames: action.payload.upcoming,
        newGames: action.payload.newGames,
      }
    case 'FETCH_SEARCHED':
      return {
        ...state,
        search: action.payload.search,
      }
    case 'CLEAR_SEARCH':
      return {
        ...state,
        search: [],
      }
    default:
      return { ...state }
  }
}
