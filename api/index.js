const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 4000;
const Transaction = require('./models/Transaction.js');
const mongoose = require("mongoose");

// dbPASSWORD = #money-dataTR

app.use(express.json());

app.use(cors());
app.get('/api/test', (req, res) => {
  res.json({body: 'test ok2'})
});

app.post('/api/transaction', async (req, res) => {
  console.log('Received data:', req.body);  // Log the incoming request data

  await mongoose.connect(process.env.MONGO_URL);
  // console.log(process.env.MONGO_URL)
  const {name, description, datetime, price} = req.body
  const transaction = await Transaction.create({name, description, datetime, price});
  
  // Check if the request body is empty or has data
  if (req.body && Object.keys(req.body).length > 0) {
    res.json(req.body);  
  } else {
    res.status(400).json({ message: 'No data received' });  // Return an error if no data
  }
});


app.get('/api/transactions', async(req,res) => {
  await mongoose.connect(process.env.MONGO_URL)
  const transactions = await Transaction.find();
  res.json(transactions);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


