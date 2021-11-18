import FinderGuitar from './components/FinderGuitar';
import DogDoorSimulator from './components/DogDoorSimulator';
import styled from 'styled-components';


const Layout = styled.div`display: flex; flex-direction: column; flex: 30% auto;`;
const Box = styled.div`height: 200px;`;

function App() {
  return (
    <Layout>
      <Box>
        <FinderGuitar />
      </Box>
      <Box>
        <DogDoorSimulator/>
      </Box>
    </Layout>
  );
}

export default App;
