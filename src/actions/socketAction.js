import io from 'socket.io-client'

export const listenForSpots = (spot) => dispatch => {
  let socket = io('http://sleepy-lowlands-69004.herokuapp.com/')
  socket.on('spot', (spot) => {
    dispatch({
      type: 'ADD_SPOT',
      payload: spot
    })
  })
}
