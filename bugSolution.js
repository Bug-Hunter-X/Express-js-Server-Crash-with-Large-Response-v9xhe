const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use a stream to send the large response in chunks
  const data = new Array(1024 * 1024).fill('a').join('');
  res.write(data);
  res.end();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});