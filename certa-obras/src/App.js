import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/HomeComponent/Header';
import Obras from './components/HomeComponent/Obras';
import SideMenu from './components/HomeComponent/SideMenu';
import HeaderObra from './components/ObrasComponent/HeaderObra';
import ObrasDetail from './components/ObrasComponent/ObraDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
            <Container>
                  <SideMenu/>
                  <Main>
                    <Header/>
                    <Obras/>
                  </Main>
              </Container>
            </Route>
            <Route path="/obras/:id">
              <Container>
                  <SideMenu/>
                  <Main>
                    <HeaderObra/>
                    <ObrasDetail/>
                  </Main>
              </Container>
            </Route>
          </Switch>
        </Router>
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