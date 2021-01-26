import React from 'react';
import { States } from '../../hooks/useFetch';
import Loader from '../Loader';

interface SuspenseProps {
  state: States;
  children: React.ReactNode;
}

function Suspense({ state, children }: SuspenseProps): JSX.Element {
  if ([States.IDLE, States.LOADING].includes(state)) {
    return <Loader />;
  }

  if (States.ERROR === state) {
    return <h2 className="center">Something went wrong...</h2>;
  }

  return <>{children}</>;
}

export default Suspense;
