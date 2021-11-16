const mongoose = require('mongoose');
const express = require('express');
const session = require('cookie-session');
// const { MongoClient } = require('mongodb');

const AccountRouter = require('./routes/account');
const ApiRouter = require('./routes/api');
const isAuthenticated = require('./middlewares/isAuthenticated');

const app = express();
const port = process.env.PORT || 3000;

const MONGO_URI = 'mongodb+srv://dbUser:iqZLaBMG8dy8Wi@cluster0.9wlwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 3600, // in ms
}));

app.use(express.json());

app.get('/', (req, res) => res.send('hello world!'));

app.use('/account', AccountRouter);
app.use('/api', ApiRouter);

// app.use((err, req, res) => {
//   res.status(500).send('There was an error!');
// });

// Start listening for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
