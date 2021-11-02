import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAPS_API_KEY } from '../credentials';

const SimpleMap = () => {
  const center = {
    lat: 40.756795,
    lng: -73.95429,
  };

  return (
    <>
      <div style={{ height: '150px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={10}
        />
      </div>
    </>
  );
};

export default SimpleMap;
