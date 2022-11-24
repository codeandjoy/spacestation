import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './css/DataContainer.css';



const DataContainer = ({ dataTitle, data }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .2 }}
            
            className='data-container'
        >
            <h1 className='data-container--title'>{ dataTitle }</h1>
            <p className='data-container--data'>{ data[0] }</p>
            <p className='data-container--data'>{ data[1] }</p>
        </motion.div>
    )
}



DataContainer.propTypes = {
    dataTitle: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired 
}

export default DataContainer;