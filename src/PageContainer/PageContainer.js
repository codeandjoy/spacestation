import { motion } from 'framer-motion';

import './css/PageContainer.css';

const pageContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: .4 } },
    exit: { opacity: 0, transition: { duration: .1 } }
}

const PageContainer = ({ children }) => {
    return (
        <motion.div 
            variants={ pageContainerVariants }
            initial='hidden'
            animate='visible'
            exit='exit'
        
            className="page-container"
        >
            <div className='page-centered-content'>
                { children }
            </div>
        </motion.div>   
    )
}

export default PageContainer;