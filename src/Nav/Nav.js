import { NavLink } from 'react-router-dom';
import './css/Nav.css';
import NavBtn from './NavBtn';

const Nav = () => {
    return (
        <nav>
            <NavBtn linkTo='/location'>Location</NavBtn>
            <NavBtn linkTo='/crew'>Crew</NavBtn>
        </nav>
    )
}

export default Nav