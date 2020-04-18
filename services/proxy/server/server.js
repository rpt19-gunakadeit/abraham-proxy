const express = require('express');
const path = require('path')

const app = express();
const port = 3500;

app.use(express.static(path.join(__dirname, 'public/dist')));

app.listen(port, () => {
  console.log(`Live on server: ${port}`);
});