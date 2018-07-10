import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SPOTS':
      if(state.spots) {
        return {
          spots: _.uniqBy([...action.payload, ...state.spots], '_id')
        }
      } else {
        return {
          spots: action.payload
        }
      }
    default:
      return state
  }
}
