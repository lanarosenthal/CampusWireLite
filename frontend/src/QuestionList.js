import React, { useState } from 'react';
import axios from 'axios';

const QuestionList = function () {
    const [questionList, setQuestionList] = useState([]);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [succeeded, setSucceeded] = useState(false);

useEffect(async () => {
    const { data: questions } = await axios.get('/api/questions'); // GET request
    setQuestionList(questions);
}, []);


  return (
    <>
      <h1>Questions:</h1>
      {data.map((question) => (
        <p>
          {' '}
          {question.questionText}
          {' '}
        </p>
      ))}
    </>
  );
};

export default QuestionList;
