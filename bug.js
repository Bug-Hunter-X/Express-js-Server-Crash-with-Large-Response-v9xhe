const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the data is large
  res.send(new Array(1024 * 1024).fill('a').join(''));
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});