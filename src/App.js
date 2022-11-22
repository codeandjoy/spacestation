import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import ContentContainer from "./ContentContainer/ContentContainer";
import CrewPage from "./CrewPage/CrewPage";
import DataContainer from "./DataContainer/DataContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import LocationPage from "./LocationPage/LocationPage";
import PageContainer from "./PageContainer/PageContainer";

function App() {
  const location = useLocation();

  return (
    <ContentContainer>
      <HeaderContainer>
        <DataContainer
          dataTitle='ISS'
          data={['longtitude: 50.1742', 'latitude: -41.2034']}
        />
        <DataContainer
          dataTitle='UTC'
          data={['18:40', 'Tuesday, 17 Apr 2018']}
        />
      </HeaderContainer>

      <Routes location={ location } key={ location.pathname }>
        <Route path='/' element={ <Navigate to='/location'/> }/>
        <Route path='/location' element=
          {
            <PageContainer>
              <LocationPage/>
            </PageContainer>
          }
        />
        <Route path='/crew' element=
          {
            <PageContainer>
              <CrewPage/>
            </PageContainer>
          }
        />
      </Routes>
    </ContentContainer>
  )
}

export default App;
