import GoogleMapReact from 'google-map-react';

import { useSpace } from '../hooks/SpaceHooks';
import LocationPin from './LocationPin';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import './css/LocationPage.css';

const LocationPage = () => {
    const { locationDataStatus, locationData } = useSpace();

    return (
        <div className="location-page">
            {locationDataStatus === 'loading' &&
                <LoadingPlaceholder/>
            }

            {locationDataStatus === 'success' && locationData !== undefined &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    center={ locationData }
                    zoom= { 1 }
                >
                    <LocationPin
                        lat={ locationData.lat }
                        lng={ locationData.lng }
                    />
                </GoogleMapReact>
            }
        </div>
    )
}

export default LocationPage;