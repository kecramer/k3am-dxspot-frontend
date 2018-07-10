import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spots from '../components/Spots'
import { getSpots } from '../actions/spotAction'

class SpotsContainer extends Component {
  componentWillMount() {
    this.props.getSpots();
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
 getSpots: () => dispatch(getSpots())
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotsContainer)
