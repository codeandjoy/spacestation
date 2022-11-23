import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';

import ContentContainer from "./ContentContainer/ContentContainer";
import CrewPage from "./CrewPage/CrewPage";
import DataContainer from "./DataContainer/DataContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import LocationPage from "./LocationPage/LocationPage";
import Nav from "./Nav/Nav";
import PageContainer from "./PageContainer/PageContainer";
import { useTime } from './hooks/TimeHooks';

const queryClient = new QueryClient();

function App() {
  const { time, date } = useTime();

  const location = useLocation();

  return (
    <QueryClientProvider client={ queryClient }>

      <ContentContainer>
        <HeaderContainer>
          <DataContainer
            dataTitle='ISS'
            data={['longtitude: 50.1742', 'latitude: -41.2034']}
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
      
    </QueryClientProvider>
  )
}

export default App;
