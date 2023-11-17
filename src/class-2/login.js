import React, { useState } from 'react';

const Login = () => {
  
  const [isLoggedIn, setLoggedIn] = useState(false);

  
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className='abc bg-dark'>
      {isLoggedIn ? (
        
        <div className='mt-5'>
          <p className='loginbtn1' >Welcome User</p>
          <button className='loginbtn' onClick={handleLogout}>Logout</button>
        </div>
      ) : (

        <div className='mt-5'>
          <p className='loginbtn1'>Please Login</p>
          <button className='loginbtn' onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
