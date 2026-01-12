/**const app = require('./app')
//const port = process.env.PORT || 3000;
const {PORT} = process.env

app.listen(PORT, () => {

    console.log (`Server is running at port : ${PORT}`);
})*/

require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

