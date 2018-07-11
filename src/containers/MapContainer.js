import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from '../config.js'

export class MapContainer extends Component {
  render() {
    let dxccLine = null
    let bounds = new this.props.google.maps.LatLngBounds();
    if(this.props.spotterDXCC && this.props.spottedDXCC) {
      const dxccPathCords = [
        {lat: parseFloat(this.props.spotterDXCC.lat), lng: parseFloat(this.props.spotterDXCC.long)},
        {lat: parseFloat(this.props.spottedDXCC.lat), lng: parseFloat(this.props.spottedDXCC.long)}
      ]

      bounds.extend(dxccPathCords[0])
      bounds.extend(dxccPathCords[1])

      dxccLine = <Polyline
        path={dxccPathCords}
        strokeColor="#00F"
        strokeOpacity={0.8}
        strokeWeight={2} />
    }

    return (
      <Map
        google={this.props.google}
        zoom={1}
        bounds={bounds}
        disableDefaultUI={true}>
        {dxccLine}
      </Map>
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

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAPS_API_KEY)
})(connect(mapStateToProps, mapDispatchToProps)(MapContainer))
