import './css/PageContainer.css';

const PageContainer = ({ children }) => {
    return (
        <div className="page-container">
            <div className='page-centered-content'>
                { children }
            </div>
        </div>   
    )
}

export default PageContainer;