import React, { useState } from 'react';

function Cu() {
  // Step 1: create a state variable
  const [count, setCount] = useState(0);

  // Step 2: define functions to increase/decrease
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Cu;