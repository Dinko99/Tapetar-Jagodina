import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export default function Map() {
  const defaultProps = {
    center: {
      lat: 43.9788232902467,
      lng: 21.249146411253225,
    },
    zoom: 16,
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat='43.9788232902467' lng='21.249146411253225' />
      </GoogleMapReact>
    </div>
  );
}
