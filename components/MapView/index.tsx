import React, { useState } from 'react';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';

interface MapData {
  setState?: any
}


const Marker = () => <span>X</span> 

const MapView: React.FC<MapData> = ( { setState } ) => {
  const [marker, setMarker] = useState(null);

  const handleClick = (e: ClickEventValue) => {
    const { lat, lng } = e;
    setMarker({lat, lng})
    setState({lat, lng})
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={''}
      defaultCenter={{lat: -4.466322, lng: -43.8768724,}}
      defaultZoom={15}
      onClick={handleClick}
      fullscreenControl={false}
    >
      {marker && <Marker 
        lat={marker.lat}
        lng={marker.lng}
      />}
    </GoogleMapReact>
  );
}

export default MapView;