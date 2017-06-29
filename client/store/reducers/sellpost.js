
export const sellpostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'app/replaceSellPost':
      return { ...state, item: payload } 
    case 'app/replaceSellPosts':
      return { ...state, items: payload }   
    default:
      return state
  }

}

