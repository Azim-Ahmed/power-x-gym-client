import React from 'react';
import './App.scss';
import AdvanceGym from './components/AdvanceGym/AdvanceGym/AdvanceGym';
import Classes from './components/Classes/Classes/Classes';
import Home from './components/Home/Home/Home';
import Membership from './components/Membership/Membership/Membership';
import Pricing from './components/Pricing/Pricing/Pricing';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/classes">
          <Classes></Classes>
        </Route>
        <Route path="/advanceGym">
          <AdvanceGym></AdvanceGym>
        </Route>
        <Route path="/pricing">
          <Pricing></Pricing>
        </Route>
        <Route path="/membership/:id">
          <Membership></Membership>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
