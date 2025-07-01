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

// import React, { useState, useEffect } from 'react';
// import { Counter } from './components/Counter';
// import { useToggle } from './hooks/useToggle';
// import { formatDate } from './utils/formatDate';

// export const App = () => {
//   const [unused, setUnused] = useState(0); // ❌ unused state (code smell)
//   const [toggle, setToggle] = useToggle();

//   useEffect(() => {
//     // ❌ Unreachable code simulation without breaking runtime
//     const unreachableExample = false;
//     if (unreachableExample) {
//       console.log('This code is unreachable'); // Will be flagged
//     }

//     // ❌ Assignment in if-condition (bug), but doesn’t affect logic
//     let a = 1, b = 2;
//     if ((a = b)) { // Intentional assignment instead of comparison
//       console.log('Assignment used in condition');
//     }
//   }, []);

//   return (
//     <div>
//       <h1 data-testid="welcome">Welcome!</h1>
//       <Counter start={5} />
//       <button onClick={setToggle}>
//         {toggle ? 'ON' : 'OFF'}
//       </button>
//       <p>{formatDate(new Date())}</p>
//     </div>
//   );
// };
