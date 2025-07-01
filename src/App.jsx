import React from 'react';
import { Counter } from './components/Counter';
import { useToggle } from './hooks/useToggle';
import { formatDate } from './utils/formatDate';

export const App = () => {
  const { on, toggle } = useToggle();
  return (
    <div>
      <h1 data-testid="welcome">Welcome!</h1>
      <Counter start={5}/>
      <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
      <div data-testid="today">{formatDate(new Date())}</div>
    </div>
  );
};
