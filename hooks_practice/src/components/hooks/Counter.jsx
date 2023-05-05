import React from  'react';
import { useState } from 'react';


const Counter = () => {
  const [ count, setCount ] = useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>
}