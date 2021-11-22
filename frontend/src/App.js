import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import QuestionList from './QuestionList'
import QuestionDisplay from './QuestionDisplay'
import AddQuestion from './AddQuestion'

const App = function () {
  const [sessionUsername, setSessionUsername] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [question, setQuestion] = useState('')
  const [author, setAuthor] = useState('')
  const [globalAnswer, setGlobalAnswer] = useState('')
  const [_id, setID] = useState('')

  return (
    <>
      <Signup />
      <Login setSessionUsername={setSessionUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <AddQuestion loggedIn={loggedIn} sessionUsername={sessionUsername} />
      <QuestionList setID={setID} setQuestion={setQuestion} setAuthor={setAuthor} setGlobalAnswer={setGlobalAnswer} />
      <QuestionDisplay _id={_id} loggedIn={loggedIn} questionText={question} author={author} setGlobalAnswer={setGlobalAnswer} globalAnswer={globalAnswer} />
    </>
  )
}

export default App
