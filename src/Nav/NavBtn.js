import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';



const NavBtn = ({ children, linkTo }) => {
    return (
        <NavLink
            to={ linkTo }
            className={({ isActive }) => {
                return (isActive ? 'current': undefined)
            }}
        >
            { children }
        </NavLink>
    )
}



NavBtn.propTypes = {
    linkTo: PropTypes.string.isRequired
}

export default NavBtn;