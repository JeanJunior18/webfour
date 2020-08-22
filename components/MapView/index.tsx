import React, { useState } from 'react';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';

// import { Container } from './styles';

const Marker = () => <span>X</span> 

const MapView: React.FC = () => {
  const [marker, setMarker] = useState({lat: 0, lng: 0});

  const handleClick = (e: ClickEventValue) => {
    const { lat, lng } = e;
    console.log(lat, lng)
    setMarker({lat, lng})
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={''}
      defaultCenter={{lat: -4.466322, lng: -43.8768724,}}
      defaultZoom={15}
      onClick={handleClick}
      fullscreenControl={false}
    >
      <Marker 
        lat={marker.lat}
        lng={marker.lng}
      />
    </GoogleMapReact>
  );
}

export default MapView;