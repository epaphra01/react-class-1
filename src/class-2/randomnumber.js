import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Randomnumber = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 101);
    const newCount = count + randomValue;
    setCount(newCount);
  };

  const isEven = count % 2 === 0;
  const countStatus = isEven ? 'Count is Even' : 'Count is Odd';

  return (
    <div className='abc bg-pink'>
      <h1 className='mt-5'>Count: {count}</h1>
      <p>{countStatus}</p>
      <button className='increbtn' onClick={handleIncrement}>Increment</button>
      <p>Increment by Random Number beetween 0 to 100</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Randomnumber />
  </React.StrictMode>,
  document.getElementById('root')
);
export default Randomnumber;