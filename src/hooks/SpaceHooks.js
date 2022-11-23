import { useQuery } from 'react-query';
import axios from 'axios';

export const useSpace = () => {
    const { status: locationDataStatus, data: locationData } = useQuery('location', () => axios.get('http://api.open-notify.org/iss-now.json'), { refetchInterval: 5000 });
    const { status: crewDataStatus, data: crewData } = useQuery('crew', () => axios.get('http://api.open-notify.org/astros.json'), { refetchInterval: 5000 });

    // Prepare data
    const cleanLocationData = {
        lat: locationData === undefined ? 0 : parseFloat(locationData?.data.iss_position.latitude),
        lng: locationData === undefined ? 0 : parseFloat(locationData?.data.iss_position.longitude),
    }
    const cleanCrewData = crewData?.data.people
        .filter((spaceman) => spaceman.craft === 'ISS')
        .map((spaceman) => ({ name: spaceman.name }));
    // 

    return { 
        locationData: cleanLocationData,
        locationDataStatus,
        crewData: cleanCrewData,
        crewDataStatus,
    }
}