const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change the port number if needed

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Store the received data in an array
const receivedData = [];

// Set up a route to handle POST requests
app.post('/', (req, res) => {
  const requestData = req.body;
  console.log('Received data:', requestData);
  receivedData.push(requestData);
  res.send('Data received'); // Send a response to the client
});

// Set up a route to display the received data
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Received Data</title>
      </head>
      <body>
        <h1>Received Data</h1>
        <ul>
          ${receivedData.map(data => `<li>${JSON.stringify(data)}</li>`).join('')}
        </ul>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
