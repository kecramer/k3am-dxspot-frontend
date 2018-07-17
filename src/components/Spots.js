import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Table, Grid, Checkbox, Button, Icon } from 'semantic-ui-react'
import { getSpots } from '../actions/spotAction'
import { toggleLiveUpdateState } from '../actions/socketAction'
import { PropagateLoader } from 'react-spinners'
import Spot from './Spot'

class Spots extends Component {
  state = { liveUpdateEnabled: true,
            page: 0,
            lastPage: 0
          }

  toggleLiveUpdate = () => {
    this.props.toggleLiveUpdateState(!this.state.liveUpdateEnabled)
    this.setState( {
      liveUpdateEnabled: !this.state.liveUpdateEnabled
    })
  }

  updateTablePage = (e) => {
    if(e.currentTarget.innerText.trim() === 'Next') {
      this.setState({
        page: this.state.page + 1
      })
    } else {
      this.setState({
        page: this.state.page - 1
      })
    }
  }

  componentDidUpdate() {
    let numSpots = (this.props.spots && this.props.spots.length) || 0
    let lastPage = Math.floor(numSpots / 20)

    if(numSpots % 20 === 0) {
      lastPage--
    }

    if(this.state.lastPage !== lastPage) {
      this.setState({
        lastPage
      })
    }
  }

  render(){
    let spotsElements = this.props.spots && this.props.spots.slice(this.state.page * 20, (this.state.page * 20) + 20).map(spot => (
      <Spot key={spot._id} spot={spot} />
    ))

    let pageButtons = null
    if(this.state.page === 0 && this.state.page === this.state.lastPage) {
      pageButtons =
        <Button.Group floated="right" widths={2}>
        </Button.Group>
    } else if (this.state.page !== 0 && this.state.page === this.state.lastPage) {
      pageButtons =
        <Button.Group floated="right" widths={2}>
          <Button animated onClick={this.updateTablePage}>
            <Button.Content visible>Previous</Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
        </Button.Group>
    } else if (this.state.page === 0) {
      pageButtons =
        <Button.Group floated="right" widths={2}>
          <Button animated onClick={this.updateTablePage}>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </Button.Group>
    } else {
      pageButtons =
        <Button.Group floated="right" widths={2}>
          <Button animated onClick={this.updateTablePage}>
            <Button.Content visible>Previous</Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
          <Button animated onClick={this.updateTablePage}>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </Button.Group>
    }

    return(
      <div>
        <Table celled striped selectable>
          <Table.Header onClick={this.props.getSpots}>
            <Table.Row>
              <Table.HeaderCell width={2}>DE</Table.HeaderCell>
              <Table.HeaderCell width={2}>DX</Table.HeaderCell>
              <Table.HeaderCell width={2}>Frequency</Table.HeaderCell>
              <Table.HeaderCell width={8}>Message</Table.HeaderCell>
              <Table.HeaderCell width={2}>Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {spotsElements}
          </Table.Body>
        </Table>
        {this.props.loading && <Grid><div style={{margin: '0 auto', padding: '1em 0 1em'}}><PropagateLoader /></div></Grid>}
        <Grid>
          <Grid.Column width={4}>
            <Checkbox onChange={this.toggleLiveUpdate} checked={this.state.liveUpdateEnabled} toggle label="Live Update"/>
          </Grid.Column>
          <Grid.Column width={8}></Grid.Column>
          <Grid.Column width={4}>
              {pageButtons}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  spots: state.spotReducer.spots,
  loading: state.spotReducer.loading
})

const mapDispatchToProps = dispatch => ({
  getSpots: () => dispatch(getSpots()),
  toggleLiveUpdateState: (isLiveUpdateEnabled) => dispatch( toggleLiveUpdateState(isLiveUpdateEnabled) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Spots)
