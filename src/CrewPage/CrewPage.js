import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useSpace } from '../hooks/SpaceHooks';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import CrewMembers from './CrewMembers';
import './css/CrewPage.css';

const CrewPage = () => {
    const { crewDataStatus, crewData } = useSpace();

    return (
        <div className="crew-page">
            {crewDataStatus === 'loading' &&
                <LoadingPlaceholder/>
            }

            {crewDataStatus === 'success' &&
                <>
                    <p className='crew-count'>Currently there are { crewData.length } people on ISS</p>
                    <CrewMembers crewData={ crewData }/>
                </>
            }

            {crewDataStatus === 'error' &&
                <ErrorMessage/>
            }
        </div>
    )
}

export default CrewPage;