import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [succeeded, setSucceeded] = useState(false)

  const createUser = async () => {
    const { data } = await axios.post('/account/signup', { username, password })
    if (data === 'user created') {
      setSucceeded(true)
    } else {
      window.alert(data)
    }
  }

  return (
    <>
      <input onChange={e => setUsername(e.target.value)} />
      <input onChange={e => setPassword(e.target.value)} />
      <Link to="/login">
        <button type="submit" onClick={createUser}> create user </button>
      </Link>
      <p>Already have an account?</p>
      <Link to="/login">Log in</Link>
    </>
  )
}

export default Signup
