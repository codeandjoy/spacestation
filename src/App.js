import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import ContentContainer from "./ContentContainer/ContentContainer";
import CrewPage from "./CrewPage/CrewPage";
import DataContainer from "./DataContainer/DataContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import LocationPage from "./LocationPage/LocationPage";
import Nav from "./Nav/Nav";
import PageContainer from "./PageContainer/PageContainer";
import { useTime } from './hooks/TimeHooks';
import { useSpace } from "./hooks/SpaceHooks";

function App() {
  const { time, date } = useTime();
  const { locationData } = useSpace();

  const location = useLocation();

  return (
    <ContentContainer>
      <HeaderContainer>
        <DataContainer
          dataTitle='ISS'
          data={[`longtitude: ${locationData.lng}`, `latitude: ${locationData.lat}`]}
        />

        <Nav/>

        <DataContainer
          dataTitle='UTC'
          data={[time, date]}
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
