import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { getSpots } from '../actions/spotAction'
import Spot from './Spot'

class Spots extends Component {
  render(){
    let spotsElements = this.props.spots && this.props.spots.map(spot => (
      <Spot key={spot._id} spot={spot} />
    ))
    return(
      <Table celled striped selectable>
        <Table.Header onClick={this.props.getSpots}>
          <Table.Row>
            <Table.HeaderCell>DE</Table.HeaderCell>
            <Table.HeaderCell>DX</Table.HeaderCell>
            <Table.HeaderCell>Frequency</Table.HeaderCell>
            <Table.HeaderCell>Message</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {spotsElements}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state) => ({
  spots: state.spotReducer.spots
})

const mapDispatchToProps = dispatch => ({
  getSpots: () => dispatch(getSpots()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Spots)
