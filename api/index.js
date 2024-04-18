import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/userroute.js";
// Load environment variables from .env file
dotenv.config();
// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// app.get("/", (req, res) => {
//   res.json({
//     message: "Api is working Perfectly ",
//   });
// });

app.use("/api/user" , router)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
