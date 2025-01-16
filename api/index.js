const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.json());

app.use(cors());
app.get('/api/test', (req, res) => {
  res.json({body: 'test ok2'})
});

app.post('/api/transaction', (req, res) => {
  console.log('Received data:', req.body);  // Log the incoming request data
  
  // Check if the request body is empty or has data
  if (req.body && Object.keys(req.body).length > 0) {
    res.json(req.body);  
  } else {
    res.status(400).json({ message: 'No data received' });  // Return an error if no data
  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


