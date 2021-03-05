const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const routes=require('./API/routes/sampleRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    'Content-Type': '*/*',
  })
);

app.use('/',routes);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Authorization'
  );
  next();
});


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
