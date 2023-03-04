import React from 'react';
import './index.css';

import { useState } from 'react';

export default function App() {
  const [array, setArray] = useState([]);

  function handleDel(i) {
    array.splice(i, 1);
    setArray([...array]);
  }

  function handleAdd(i) {
    let e = prompt('Enter user name');
    setArray([...array, e]);
  }

  return (
    <React.Fragment>
      <button onClick={handleAdd}>Add</button>

      {array.map((e, index) => {
        return (
          <>
            <p>{e}</p>
            <button onClick={() => handleDel(index)}>Delete</button>
          </>
        );
      })}
    </React.Fragment>
  );
}
