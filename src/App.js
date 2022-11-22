import ContentContainer from "./ContentContainer/ContentContainer";
import DataContainer from "./DataContainer/DataContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";

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

    </ContentContainer>
  )
}

export default App;
