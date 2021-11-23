import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionList = ({
  setQuestion, setAuthor, setGlobalAnswer, setID,
}) => {
  const [questionList, setQuestionList] = useState([])

  const retrieveQs = async () => {
    const { data } = await axios.get('/api/questions')
    setQuestionList(data)
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      retrieveQs()
    }, 2000)
    // return a clean-up function so that the repetition can be stopped
    // when the component is unmounted
    return () => {
      setQuestionList([]); clearInterval(intervalID)
    }
  }, [])

  const updateQuestion = ({ question }) => {
    setQuestion(question.questionText)
    setAuthor(question.author)
    setGlobalAnswer(question.answer)
    setID(question._id)
  }

  return (
    <>
      <h1>Questions:</h1>
      {questionList.map(question => (
        <button type="submit" onClick={e => updateQuestion({ question })}>{question.questionText}</button>
      ))}
    </>
  )
}

export default QuestionList
