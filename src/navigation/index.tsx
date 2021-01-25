import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import MovieDetail from '../pages/MovieDetail';
import Home from '../pages/Home';

function Navigation(): JSX.Element {
  const { PUBLIC_URL } = process.env;

  return (
    <Router basename={PUBLIC_URL}>
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
