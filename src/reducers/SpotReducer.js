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

    case 'ADD_SPOTTER_DXCC':
      return {
        ...state,
        spotterDXCC: action.payload
      }

    case 'ADD_SPOTTED_DXCC':
      return {
        ...state,
        spottedDXCC: action.payload
      }

    case 'SET_ACTIVE_SPOT':
      return {
        ...state,
        activeSpot: action.payload,
        spotDXCC: null
      }

    case 'ADD_USA_LOC_SPOTTER':
      return {
        ...state,
        spotterDXCC: {...state.spotterDXCC, lat: action.payload.latitude, long: action.payload.longitude}
      }

    case 'ADD_USA_LOC_SPOTTED':
      return {
        ...state,
        spotterDXCC: {...state.spottedDXCC, lat: action.payload.latitude, long: action.payload.longitude}
      }

    default:
      return state
  }
}
