import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import MovieDetail from '../pages/MovieDetail';
import Home from '../pages/Home';

function Navigation(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/movieDetail/:id">
          <MovieDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
