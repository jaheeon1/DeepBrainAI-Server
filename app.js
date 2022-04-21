require('dotenv').config();
const cors = require('cors')
const express = require('express');
const APP = express();
const { PORT } = process.env;
APP.use(express.static('public'));
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
APP.use(cors()); 

APP.listen(PORT, () => {
  console.log('서버가 정상적으로 실행되고 있습니다.')
})