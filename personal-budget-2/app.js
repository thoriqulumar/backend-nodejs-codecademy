require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const userRouters = require('./routes/user');
const userEnvelopes = require('./routes/envelopes');
const docsRouter = require("./helpers/docs");

app.use("/api-docs", docsRouter);
app.use('/api/v1/user', userRouters)
app.use('/api/v1/envelopes', userEnvelopes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
