import React, { Component } from 'react'
//import { Map, GoogleApiWrapper } from 'google-maps-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

import { appConfig } from '../../config'

const mapStyles = {
  width: '100%',
  height: '30vh',
}

export class MapDetail extends Component {
  static defaultProps = {
    lat: 25.0259029,
    lng: 121.5703875,
  }

  render() {
    //console.log(this.props)
    return (
      <Map
        google={this.props.google}
        containerStyle={{
          width: '100%',
          height: '250px',
          position: 'relative',
        }}
        zoom={17}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
      >
        <Marker
          name={'物件位置'}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: appConfig.googleMapApiKey,
  language: 'zh-TW',
})(MapDetail)
