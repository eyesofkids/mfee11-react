import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const containerStyle = {
  position: 'relative',
  width: 'calc(100vw - 478px)',
  height: 'calc(100vh - 80px)',
}

export class MapContainer extends React.Component {

  constructor(){
    super()
  
    this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: {
      lat: 37.774929,
      lng: -122.419416,
    },
    }
    // ref值
    this.markerOne = React.createRef()
    this.infoWindowOne = React.createRef()
  }

  onMarkerClick = (props, marker, e) => {
    this.setState(prevState => ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }));
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMapReady=(mapProps,map)=>{
    this.map = map
  }

  componentDidMount(){
    console.log(this.map)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.currentLocation,prevProps.currentLocation)

    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }
    if (prevProps.currentLocation !== this.props.currentLocation) {
      this.recenterMap()

    }

  }

  recenterMap=() =>{
    const map = this.map
    const curr = this.props.currentLocation

    const google = this.props.google
    const maps = google.maps

    console.log(this.props,this.map)

    if (map) {
      //console.log(this.markerOne.current.marker)
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
      map.setZoom(12)

      console.log(this.infoWindowOne.current.infowindow)

      let markerCurrent = this.markerOne.current.marker
      let infowindowCurrent = this.infoWindowOne.current.infowindow

      infowindowCurrent.open(map, markerCurrent)
     
    }
  }


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <div className="map_class1">
        <Map
          google={this.props.google}
          // style={{ width: '100%', height: '100%' }}
          zoom={8.3}
          initialCenter={{
            lat: 23.797296,
            lng: 121.03121,
          }}
          containerStyle={containerStyle}
          onReady={this.onMapReady}
        >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 24.96956174638972, lng: 121.51736957182294 }}
            WEBSIT="http://localhost:3000/member"
            onClick={this.onMarkerClick}
            ref={this.markerOne}
          />
          <InfoWindow
            ref={this.infoWindowOne}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4>{'名稱'}</h4>
              <p>{'地點'}</p>

              <Button variant="primary" href={this.state.selectedPlace.WEBSIT}>
                詳細資訊
              </Button>
            </div>
          </InfoWindow>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 24.86956174638972, lng: 121.51736957182294 }}
            WEBSIT="http://localhost:3000/member"
            onClick={this.onMarkerClick}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 24.76956174638972, lng: 121.51736957182294 }}
            WEBSIT="http://localhost:3000/member"
            onClick={this.onMarkerClick}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 24.66956174638972, lng: 121.51736957182294 }}
            WEBSIT="http://localhost:3000/member"
            onClick={this.onMarkerClick}
          />
         

         
        </Map>
      </div>
    )
  }
}
const LoadingContainer = (props) => (
  <div class="hello" style={{ height: '100px' }}></div>
)
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBqaQ5bkbz5ECTqswDwKmm2sK_H1E0OQU',
  LoadingContainer: LoadingContainer,
})(MapContainer)
