const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001; // Use the port you prefer

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/receive-text', (req, res) => {
  console.log("GET HELO REQ");
  const { text } = req.body;
  console.log('Received text:', text);

  // Process the received text as needed

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
