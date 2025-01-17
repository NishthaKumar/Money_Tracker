// import { Schema, model } from "mongoose"; // Import Schema and model from mongoose
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

// Define the schema for a transaction
const TransactionSchema = new Schema({
  name: { type: String, required: true },
  price: {type: Number, required: true},
  description: { type: String, required: true },
  datetime: { type: Date, required: true }
});

// Create the model from the schema
const TransactionModel = model("Transaction", TransactionSchema);

// Export the model
module.exports = TransactionModel;

