import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

// import Home from '../pages/Home';
// import Signup from '../pages/Signup';
import App2 from "./App2"
import Home from "./demo"

const Main = () => {
  return (
      <BrowserRouter>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    <Route  path='/demo' component={Home}></Route>
      <Route exact path='/' component={App2}></Route>
     
    </Switch>
    </BrowserRouter>
  );
}

export default Main;