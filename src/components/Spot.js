import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { DateTime } from 'luxon'
import { setActiveSpot } from '../actions/spotAction'


class Spot extends Component {
  makeActiveSpot = () => {
    this.props.setActiveSpot(this.props.spot)
  }

  render(){
    let spot = this.props.spot
    let time = DateTime.fromISO(spot.when)
    return(
      <Table.Row active={this.props.activeSpot && spot._id === this.props.activeSpot._id}
                 onClick={this.makeActiveSpot}>
        <Table.Cell>{spot.spotter}</Table.Cell>
        <Table.Cell>{spot.spotted}</Table.Cell>
        <Table.Cell>{spot.frequency}</Table.Cell>
        <Table.Cell>{spot.message}</Table.Cell>
        <Table.Cell title={time.toLocaleString(DateTime.DATETIME_FULL)}>{time.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)}</Table.Cell>
      </Table.Row>
    )
  }
}

const mapStateToProps = (state) => ({
  activeSpot: state.spotReducer.activeSpot
})

const mapDispatchToProps = dispatch => ({
  setActiveSpot: (spot) => dispatch(setActiveSpot(spot))
})

export default connect(mapStateToProps, mapDispatchToProps)(Spot)
