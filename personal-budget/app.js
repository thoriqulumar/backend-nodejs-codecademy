require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

const docsRouter = require('./helpers/docs');
const routers = require('./routes/routes');

app.use(express.json());
app.use(morgan('dev'));

app.use('/api-docs', docsRouter);
app.use('/api/v1', routers);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
