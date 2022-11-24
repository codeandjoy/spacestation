import NavBtn from './NavBtn';
import './css/Nav.css';

const Nav = () => {
    return (
        <nav>
            <NavBtn linkTo='/location'>Location</NavBtn>
            <NavBtn linkTo='/crew'>Crew</NavBtn>
        </nav>
    )
}

export default Nav;