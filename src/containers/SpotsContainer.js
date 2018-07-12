import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spots from '../components/Spots'
import { getSpots } from '../actions/spotAction'
import { listenForSpots } from '../actions/socketAction'

class SpotsContainer extends Component {
  componentDidMount() {
    this.props.getSpots()
    this.props.listenForSpots()
  }

  componentWillReceiveProps() {
    console.log('receiving props')
  }

  render() {
    return(
      <Spots />
    )
  }
}

const mapStateToProps = (state) => ({
  spots: state.spotReducer.spots
})

const mapDispatchToProps = dispatch => ({
  getSpots: () => dispatch(getSpots()),
  listenForSpots: () => dispatch(listenForSpots())
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotsContainer)
