
import React from 'react';
import NewPlace from './places/components/NewPlaces'
import Users from './user/pages/Users';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NewPlaces from './places/components/NewPlaces';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component = {Users} exact></Route>
      <Route path = "/places/new" exact><NewPlaces/></Route>
      <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
