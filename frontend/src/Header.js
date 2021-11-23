import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Header = ({
  loggedIn, sessionUsername, setSessionUsername, setLoggedIn,
}) => {
  const logoutUser = async () => {
    const { data } = await axios.get('/account/logout')
    setLoggedIn(false)
    setSessionUsername('')
  }

  return (
    <>
      <h1>Campuswire Lite</h1>
      {(loggedIn) ? (
        <>
          <p>
            Hi &nbsp;
            {sessionUsername}
          </p>
          <Link to="/"><button type="submit" onClick={logoutUser}> Logout </button></Link>
        </>
      )
        : (<Link to="/login"><button type="submit"> Login </button></Link>) }
    </>
  )
}

export default Header
