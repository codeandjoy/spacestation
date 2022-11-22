import './css/HeaderContainer.css';

const HeaderContainer = ({ children }) => {
    return (
        <div className="header-container">
            { children }
        </div>
    )
}

export default HeaderContainer;