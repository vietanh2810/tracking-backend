const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Configure Express middleware, routes, and other components as needed

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/tracking_app';

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
