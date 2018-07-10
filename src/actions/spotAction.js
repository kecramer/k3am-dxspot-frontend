export const getSpots = () => dispatch => {
  fetch('http://localhost:3000/api')
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: 'ADD_SPOTS',
        payload: resp
      })
    })
}
