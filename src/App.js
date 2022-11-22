import ContentContainer from "./ContentContainer/ContentContainer";
import CrewPage from "./CrewPage/CrewPage";
import DataContainer from "./DataContainer/DataContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import LocationPage from "./LocationPage/LocationPage";
import PageContainer from "./PageContainer/PageContainer";

function App() {
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

      <PageContainer>
        <CrewPage/>
      </PageContainer>
    </ContentContainer>
  )
}

export default App;
