import PropTypes from 'prop-types';
import CrewMember from './CrewMember';



const CrewMembers = ({ crewData }) => {
    return (
        <div className='crew-members'>
            {crewData && crewData.map(crewMember => (
                <CrewMember
                    key={ crewMember.name }
                    name={ crewMember.name }
                />
            ))}
        </div>
    )
}



CrewMembers.propTypes = {
    crewData: PropTypes.array.isRequired
}

export default CrewMembers;