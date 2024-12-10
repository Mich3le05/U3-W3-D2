// dichiaro ed esporto gli action.type/reducers case
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

// dichiaro ed esporto le actions, tramite degli "action creators"

export const addToFavouriteAction = (jobSelected) => ({
  type: ADD_TO_FAVOURITE,
  payload: jobSelected,
})

export const removeFromFavouriteAction = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
})
