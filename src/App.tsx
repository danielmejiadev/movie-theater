import React from 'react';
import './App.css';

import Navigation from './navigation';
import MovieProvider from './providers/MovieProvider';

function App(): JSX.Element {
  return (
    <MovieProvider>
      <Navigation />;
    </MovieProvider>
  );
}

export default App;
