import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionDisplay = ({
  loggedIn, questionText, author, setGlobalAnswer, globalAnswer, _id,
}) => {
  const [answer, setAnswer] = useState('')

  const addAnswer = async () => {
    console.log(answer)
    console.log(_id)
    const { data } = await axios.post('/api/questions/answer', { _id, answer })
    if (data === 'answer added') {
      console.log('addAnswer added')
      setGlobalAnswer(answer)
    } else {
      console.log('issue')
      window.alert(data)
    }
  }

  return (
    <>
      <h1>
        Question:
        {questionText}
      </h1>
      <p>
        Author:
        {author}
      </p>
      <p>
        Answer:
        {globalAnswer}
      </p>

      {(globalAnswer === '' && loggedIn)
        ? (
          <>
            <input onChange={e => setAnswer(e.target.value)} />
            <button type="submit" onClick={addAnswer}>Post</button>
          </>
        ) : (
          <br />)}

    </>
  )
}

export default QuestionDisplay
