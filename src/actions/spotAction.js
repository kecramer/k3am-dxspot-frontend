export const getSpots = () => dispatch => {
  dispatch({
    type: 'SPOTS_LOADING',
    payload: true
  })

  fetch('//sleepy-lowlands-69004.herokuapp.com/spot')
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: 'SPOTS_LOADING',
        payload: false
      })
      dispatch({
        type: 'ADD_SPOTS',
        payload: resp
      })
      dispatch(setActiveSpot(resp[0]))
    })
    .catch((err) => {
      dispatch({
        type: 'SPOTS_LOADING',
        payload: false
      })
      dispatch({
        type: 'SPOTS_ERR',
        payload: err
      })
    })
}

export const setActiveSpot = (spot) => dispatch => {
  dispatch({
    type: 'SET_ACTIVE_SPOT',
    payload: spot
  })

  fetch('//sleepy-lowlands-69004.herokuapp.com/dxcc/' + spot.spotter)
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: 'ADD_SPOTTER_DXCC',
        payload: resp
      })
    })

  fetch('//sleepy-lowlands-69004.herokuapp.com/dxcc/' + spot.spotted)
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: 'ADD_SPOTTED_DXCC',
        payload: resp
      })
    })
}

export const getUSALocation = (call, isSpotter) => dispatch => {
  fetch(`//sleepy-lowlands-69004.herokuapp.com/dxcc/${call}/usa`)
    .then((resp) => resp.json())
    .then((resp) => {
      if(isSpotter) {
        dispatch({
          type: 'ADD_USA_LOC_SPOTTER',
          payload: resp.location
        })
      } else {
        dispatch({
          type: 'ADD_USA_LOC_SPOTTED',
          payload: resp.location
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getSpotDXCC = (call) => dispatch => {
  fetch('//sleepy-lowlands-69004.herokuapp.com/dxcc/' + call)
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: 'ADD_SPOT_DXCC',
        payload: resp
      })
    })
}
