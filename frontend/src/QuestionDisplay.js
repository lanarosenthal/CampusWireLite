import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionDisplay = ({
  loggedIn, questionText, author, setGlobalAnswer, globalAnswer, _id,
}) => {
  const [answer, setAnswer] = useState('')

  const addAnswer = async () => {
    const { data } = await axios.post('/api/questions/answer', { _id, answer })
    if (data === 'answer added') {
      setGlobalAnswer(answer)
    } else {
      window.alert(data)
    }
  }

  return (
    <>
      <div>
        <h1>
          {questionText}
        </h1>
        <br />
        <p>
          Author: &nbsp;
          {author}
        </p>
        <br />
        <p>
          Answer: &nbsp;
          {globalAnswer}
        </p>
        <br />
        <br />
        {(globalAnswer === '' && loggedIn)
          ? (
            <>
              <p>Enter Answer: &nbsp;</p>
              <input onChange={e => setAnswer(e.target.value)} />
              <button type="submit" onClick={addAnswer}>Post</button>
            </>
          ) : (
            <br />)}
      </div>
    </>
  )
}

export default QuestionDisplay
