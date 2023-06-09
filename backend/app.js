const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
dotenv.config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/users', userRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentsRouter);
module.exports = app;
