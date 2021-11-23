import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = ({ setSessionUsername, loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [succeeded, setSucceeded] = useState(false)

  const loginUser = async () => {
    const { data } = await axios.post('/account/login', { username, password })
    if (data === 'user logged in successfully') {
      setSucceeded(true)
      setSessionUsername(username)
      setLoggedIn(true)
    } else {
      window.alert(data)
    }
  }

  return (
    <>
      <input onChange={e => setUsername(e.target.value)} />
      <input onChange={e => setPassword(e.target.value)} />
      <Link to="/">
        <button type="submit" onClick={loginUser}> login </button>
      </Link>
      <p>Not yet registered?</p>
      <Link to="/signup">Sign up</Link>
    </>
  )
}

export default Login
