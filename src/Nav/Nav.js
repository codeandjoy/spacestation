import { motion } from 'framer-motion';

import NavBtn from './NavBtn';
import './css/Nav.css';

const Nav = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .2, delay: .3 }}
        >
            <NavBtn linkTo='/location'>Location</NavBtn>
            <NavBtn linkTo='/crew'>Crew</NavBtn>
        </motion.nav>
    )
}

export default Nav;