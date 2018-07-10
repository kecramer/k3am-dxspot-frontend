import React, { Component} from 'react'
import { Table } from 'semantic-ui-react'
import { DateTime } from 'luxon'

export default class Spot extends Component {
  render(){
    let spot = this.props.spot
    let time = DateTime.fromISO(spot.when)
    return(
      <Table.Row>
        <Table.Cell>{spot.spotter}</Table.Cell>
        <Table.Cell>{spot.spotted}</Table.Cell>
        <Table.Cell>{spot.frequency}</Table.Cell>
        <Table.Cell>{spot.message}</Table.Cell>
        <Table.Cell>{time.toLocaleString(DateTime.DATETIME_FULL)}</Table.Cell>
      </Table.Row>
    )
  }
}
