import React from 'react';

export const Counter = ({ start = 0 }) => {
  const [count, setCount] = React.useState(start);
  return (
    <>
      <div data-testid="count">{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
    </>
  );
};
