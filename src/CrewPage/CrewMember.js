import PropTypes from 'prop-types';

import './css/CrewMember.css';



const CrewMember = ({ name }) => {
    return (
        <div className='crew-member'>
            <div className='crew-member--profile-picture'></div>
            <p className='crew-member--name'>{ name }</p>
        </div>
    )
}



CrewMember.propTypes = {
    name: PropTypes.string.isRequired
}

export default CrewMember;