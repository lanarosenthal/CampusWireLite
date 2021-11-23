import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

const AddQuestion = ({ loggedIn, author }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [questionText, setQuestionText] = useState('')

  const addQ = async () => {
    console.log('sessionUsername ', author)
    const { data } = await axios.post('/api/questions/add', { questionText, author })
    if (data === 'question added') {
      console.log('question added')
      setShow(false)
    } else {
      console.log('issue')
      setShow(false)
      window.alert(data)
    }
  }

  return (
    <>
      {loggedIn
        ? (
          <>
            <Button variant="primary" onClick={handleShow}>
              Ask a Question
            </Button>
            <Modal show={show} onHide={handleClose}>
              <input onChange={e => setQuestionText(e.target.value)} />
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={addQ}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          <Link to="/login">
            <Button variant="primary">
              Log in to ask a Question
            </Button>
          </Link>
        )}
    </>
  )
}

export default AddQuestion
