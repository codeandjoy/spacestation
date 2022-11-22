import CrewMember from './CrewMember';
import './css/CrewPage.css';

const CrewPage = () => {
    const sampleData = [
        { name: 'Skott Tingle' },
        { name: 'Richard Amold' }
    ]

    return (
        <div className="crew-page">
            <p className='crew-count'>Currently 6 people on ISS</p>
 
            <div className='crew-members'>
                {sampleData.map(crewMember => (
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