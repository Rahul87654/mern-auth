import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

// Create Express app
const app = express();

// Define routes or middleware here if needed

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
