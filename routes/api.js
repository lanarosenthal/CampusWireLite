const express = require('express');
const Question = require('../models/question');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// questions
router.get('/questions', async (req, res) => {
  try {
    const quest = await Question.find({});
    res.json(quest);
  } catch (err) {
    res.send('error in finding questions');
  }
});

// questions/add
router.post('/questions/add', isAuthenticated, async (req, res) => {
  const { questionText, author } = req.body;

  try {
    const quest = await Question.create({ questionText, answer: '', author });
    res.send(quest);
  } catch (err) {
    res.send('adding question has problems');
  }
});

// questions/answer
router.post('/questions/answer', isAuthenticated, async (req, res) => {
  const { _id, answer } = req.body;
  console.log(_id);
  try {
    const ans = await Question.findOneAndUpdate({ _id }, { answer });
    console.log(ans);
    res.send(ans);
  } catch (err) {
    console.log(err);
    res.send('adding answer has problems');
  }
});

module.exports = router;
