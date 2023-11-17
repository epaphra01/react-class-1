import  { useState } from 'react';
import './class.css';

const Cartask = () => {
  const [speed, setSpeed] = useState(0);

  const accelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10);
    }
  };

  const applyBrake = () => {
    if (speed > 0) {
      setSpeed(speed - 10);
    }
  };

  return (
    <div className='abc carimg'>
        <div >
            <h1 className='carmar1'>SPEEDOMETER</h1>
      <h2 className='mt-5 ' >Speed is {speed} mph</h2>
      <p >Min Limit 0mph,Max Limit 200mph</p>
      <div className=''>
      <button className='carmarbtn'  onClick={accelerate}>Accelerate</button>
      <button className=' carmarbtn' onClick={applyBrake}>Apply Brake</button>
      </div>
      </div>
    </div>
  );
};

export default Cartask;