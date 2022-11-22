import { useSpace } from '../hooks/SpaceHooks';
import CrewMember from './CrewMember';
import './css/CrewPage.css';

const CrewPage = () => {
    const { crewData } = useSpace();

    return (
        <div className="crew-page">
            <p className='crew-count'>Currently 6 people on ISS</p>
 
            <div className='crew-members'>
                {crewData && crewData.map(crewMember => (
                    <CrewMember
                        key={ crewMember.name }
                        name={ crewMember.name }
                    />
                ))}
            </div>
        </div>
    )
}

export default CrewPage;