const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db.js');
const itemsRouter = require('./items');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/items', itemsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});