const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Use the port you prefer

app.use(bodyParser.json());

app.post('/receive-text', (req, res) => {
  const { text } = req.body;
  console.log('Received text:', text);

  // Process the received text as needed

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
