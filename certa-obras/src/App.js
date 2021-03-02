import styled from 'styled-components';
import './App.css';
import Header from './components/HomeComponent/Header';
import Obras from './components/HomeComponent/Obras';
import SideMenu from './components/HomeComponent/SideMenu';

function App() {
  return (
    <div className="App">
              <Container>
                  <SideMenu/>
                  <Main>
                  <Obras/>
                    <Header/>
                  </Main>
              </Container>
    </div>
  );
}

export default App;


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
grid-template-rows: 25px auto
`

const Main = styled.div`
width: 100%;
margin-left: 3.0rem;
margin-right: 3.0rem;
`