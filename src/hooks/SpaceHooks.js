import { useQuery } from 'react-query';
import axios from 'axios';

export const useSpace = () => {
    const { status: locationDataStatus, data: locationData } = useQuery('location', () => axios.get('https://api.wheretheiss.at/v1/satellites/25544'), { refetchInterval: 5000 });
    const { status: crewDataStatus, data: crewData } = useQuery('crew', () => axios.get('https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json'), { refetchInterval: 5000 });

    // Prepare data
    const cleanLocationData = {
        lat: locationData === undefined ? 0 : parseFloat(locationData?.data.latitude.toFixed(2)),
        lng: locationData === undefined ? 0 : parseFloat(locationData?.data.longitude.toFixed(2)),
    }
    const cleanCrewData = crewData?.data.people
        .filter((spaceman) => spaceman.iss === true)
        .map((spaceman) => ({ name: spaceman.name }));
    // 

    return { 
        locationData: cleanLocationData,
        locationDataStatus,
        crewData: cleanCrewData,
        crewDataStatus,
    }
}