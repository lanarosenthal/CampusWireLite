import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import QuestionList from './QuestionList';

const App = function () {
  const [sessionUsername, setSessionUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Signup />
      <Login setSessionUsername={setSessionUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <QuestionList />
    </>
  );
};

export default App;
