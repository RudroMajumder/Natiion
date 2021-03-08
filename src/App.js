import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Languages from './components/Languages/Languages';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Regions from './components/Regions/Regions';
import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <div >
      
      <Router>
      <Nav></Nav>
        <Switch>
        <Route exact  path ="/">
            <Main></Main>
          </Route>
          <Route  path ="/main">
            <Main></Main>
          </Route>
          <Route path ="/languages">
            <Languages></Languages>
          </Route>
          <Route path="/regions">
            <Regions></Regions>
          </Route>
          <Route path ="/alpha/:alpha2Code">
            <CountryDetails></CountryDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
