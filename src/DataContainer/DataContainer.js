import PropTypes from 'prop-types';

import './css/DataContainer.css';


const DataContainer = ({ dataTitle, data }) => {
    return (
        <div className='data-container'>
            <h1 className='data-container--title'>{ dataTitle }</h1>
            <p className='data-container--data'>{ data[0] }</p>
            <p className='data-container--data'>{ data[1] }</p>
        </div>
    )
}


DataContainer.propTypes = {
    dataTitle: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired 
}

export default DataContainer;