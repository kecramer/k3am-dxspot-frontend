import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { DateTime } from 'luxon'
import MapContainer from '../containers/MapContainer'


class SpotDetail extends Component {
  render(){
    return(
      <Grid celled style={{marginTop: 0}}>
        <Grid.Row style={{height: '15em'}}>
          <MapContainer />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} style={{backgroundColor: "rgba(0,0,50,.02)"}}>Spotter Information</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>Call</Grid.Column>
          <Grid.Column width={11}>{this.props.activeSpot && this.props.activeSpot.spotter}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>Entity</Grid.Column>
          <Grid.Column width={11}>{this.props.spotterDXCC && this.props.spotterDXCC.entity}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>Continent</Grid.Column>
          <Grid.Column width={4}>{this.props.spotterDXCC && this.props.spotterDXCC.cont}</Grid.Column>
          <Grid.Column width={4}>CQ Zone</Grid.Column>
          <Grid.Column width={4}>{this.props.spotterDXCC && this.props.spotterDXCC.cqz}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} style={{backgroundColor: "rgba(0,0,50,.02)"}}>Spotted Information</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>Call</Grid.Column>
          <Grid.Column width={11}>{this.props.activeSpot && this.props.activeSpot.spotted}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>Entity</Grid.Column>
          <Grid.Column width={11}>{this.props.spottedDXCC && this.props.spottedDXCC.entity}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>Continent</Grid.Column>
          <Grid.Column width={4}>{this.props.spottedDXCC && this.props.spottedDXCC.cont}</Grid.Column>
          <Grid.Column width={4}>CQ Zone</Grid.Column>
          <Grid.Column width={4}>{this.props.spottedDXCC && this.props.spottedDXCC.cqz}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} style={{backgroundColor: "rgba(0,0,50,.02)"}}>QSO Information</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>Frequency</Grid.Column>
          <Grid.Column width={11}>{this.props.activeSpot && this.props.activeSpot.frequency}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>Time</Grid.Column>
          <Grid.Column width={11}>{this.props.activeSpot && DateTime.fromISO(this.props.activeSpot.when).toLocaleString(DateTime.DATETIME_FULL)}</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  activeSpot: state.spotReducer.activeSpot,
  spotterDXCC: state.spotReducer.spotterDXCC,
  spottedDXCC: state.spotReducer.spottedDXCC
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetail)
