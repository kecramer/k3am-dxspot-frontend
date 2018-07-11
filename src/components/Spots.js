import React, { Component} from 'react'
import { Table } from 'semantic-ui-react'
import Spot from './Spot'

export default class Spots extends Component {
  render(){
    let spotsElements = this.props.spots && this.props.spots.map(spot => (
      <Spot key={spot._id} spot={spot} />
    ))
    return(
      <Table celled striped selectable>
        <Table.Header>
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
