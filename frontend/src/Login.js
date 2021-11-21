import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [succeeded, setSucceeded] = useState(false);

  const loginUser = async () => {
    const { data } = await axios.post('/account/login', { username, password });
    if (data === 'user logged in successfully') {
      setSucceeded(true);
    }
  };

  return (
    <>
      <input onChange={(e) => setUsername(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={loginUser}> login </button>
      <p>
        {' '}
        succeeded:
        {`${succeeded}`}
      </p>
    </>
  );
};

export default Login;
