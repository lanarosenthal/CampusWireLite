import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import QuestionList from './QuestionList'
import QuestionDisplay from './QuestionDisplay'
import AddQuestion from './AddQuestion'
import Header from './Header'

const App = () => {
  const [sessionUsername, setSessionUsername] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [question, setQuestion] = useState('')
  const [author, setAuthor] = useState('')
  const [globalAnswer, setGlobalAnswer] = useState('')
  const [_id, setID] = useState('')

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setSessionUsername={setSessionUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route
            path="/"
            element={(
              <>
                {' '}
                <Header setSessionUsername={setSessionUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn} sessionUsername={sessionUsername} />
                <br />
                <AddQuestion loggedIn={loggedIn} author={sessionUsername} />
                <br />
                <QuestionList setID={setID} setQuestion={setQuestion} setAuthor={setAuthor} setGlobalAnswer={setGlobalAnswer} />
                <br />
                <QuestionDisplay _id={_id} loggedIn={loggedIn} questionText={question} author={author} setGlobalAnswer={setGlobalAnswer} globalAnswer={globalAnswer} />
              </>
)}
          />
        </Routes>
      </Router>

    </>
  )
}

export default App
