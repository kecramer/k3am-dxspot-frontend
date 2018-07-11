import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spots from '../components/Spots'
import { getSpots, addSpot } from '../actions/spotAction'
import io from 'socket.io-client'

class SpotsContainer extends Component {
  constructor() {
    super()

    this.socket = io('http://sleepy-lowlands-69004.herokuapp.com/')
    this.socket.on('spot', (spot) => {
      this.props.addSpot(spot)
    })
  }

  componentDidMount() {
    this.props.getSpots();
  }

  componentWillReceiveProps() {
    console.log('receiving props')
  }

  render() {
    return(
      <Spots spots={this.props.spots}/>
    )
  }
}

const mapStateToProps = (state) => ({
  spots: state.spotReducer.spots
})

const mapDispatchToProps = dispatch => ({
  getSpots: () => dispatch(getSpots()),
  addSpot: (spot) => dispatch(addSpot(spot))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotsContainer)
