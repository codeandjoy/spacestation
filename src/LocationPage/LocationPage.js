import GoogleMapReact from 'google-map-react';

import { useSpace } from '../hooks/SpaceHooks';
import LocationPin from './LocationPin';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './css/LocationPage.css';

const LocationPage = () => {
    const { locationDataStatus, locationData } = useSpace();

    return (
        <div className="location-page">
            {locationDataStatus === 'loading' &&
                <LoadingPlaceholder/>
            }

            {locationDataStatus === 'success' &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDPQ7UyVROSr4lLU_lv2Y38qhuEdWuZYxE' }}
                    center={ locationData }
                    zoom= { 1 }
                >
                    <LocationPin
                        lat={ locationData.lat }
                        lng={ locationData.lng }
                    />
                </GoogleMapReact>
            }

            {locationDataStatus === 'error' &&
                <ErrorMessage/>
            }
        </div>
    )
}

export default LocationPage;