import React, { useState, useCallback } from 'react';
import markerIcon from '../../../public/icons/map-pin.svg';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function LocationCard() {
  const [map, setMap] = useState(null);

  const center = {
    lat: 23.798824,
    lng: 90.369097,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBKViSdF5QWQWCnP_Gak7Q311UnhSTrrec",
    // googleMapsApiKey: "AIzaSyAOhOIZxvRoAH1-RcUzVEpG_pHj9hVP3jw",
  })


  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);

  return (
    <div className='rs-relative rs-overflow-hidden rs-bg-white rs-border rs-border-gray-300 rs-p-2 rs-w-full '>
      <div className='rs-w-full rs-h-[200px] rs-overflow-hidden'>
        {
          isLoaded &&
          <GoogleMap
            options={{
              maxZoom: 20,
              zoom: 18
            }}

            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            mapContainerClassName={'rs-w-full rs-h-full'}

          >
            <Marker position={center} icon={markerIcon} zIndex={2} />
          </GoogleMap>
        }
      </div>
    </div>
  )
}
