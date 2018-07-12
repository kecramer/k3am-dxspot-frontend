import io from 'socket.io-client'

let socket = io('//sleepy-lowlands-69004.herokuapp.com/')

export const listenForSpots = (spot) => dispatch => {
  socket.on('spot', (spot) => {
    dispatch({
      type: 'ADD_SPOT',
      payload: spot
    })
  })
}

export const toggleLiveUpdateState = (isLiveUpdateEnabled) => dispatch => {
  if(isLiveUpdateEnabled) {
    socket.open()
  } else {
    socket.close()
  }
  dispatch({
    type: 'SOCKET_STATUS_CHANGE',
    payload: isLiveUpdateEnabled
  })
}
