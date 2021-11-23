import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      <p>Username:</p>
      <input onChange={e => setUsername(e.target.value)} />
      <br />
      <p>Password:</p>
      <input onChange={e => setPassword(e.target.value)} />
      <br />
      <br />
      <Link to="/login">
        <Button type="submit" onClick={createUser}> Create User </Button>
      </Link>
      <p>
        Already have an account?
        <Link to="/login"> Log in</Link>
      </p>
    </>
  )
}

export default Signup
