import React, { useState } from 'react';

const Welcome = () => {
  
  const [isSubscribed, setIsSubscribed] = useState(false);


  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className='abc bg-dark '>
        <div className='wel'>Welcome</div>
     <div className='wel1'> {'Thank You! Happy Learning'}</div>
      <button className='wel2 mt-5' onClick={handleButtonClick}>
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  );
};

export default Welcome;
