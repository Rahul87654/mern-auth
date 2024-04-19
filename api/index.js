import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userouter from "./routes/userroute.js";
import authrouter from "./routes/auth.route.js";
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

app.use(express.json()); // Middleware for parsing JSON bodies
app.use("/api/user", userouter);
app.use("/api/auth", authrouter);
app.use((err,req,res,next)=>{
  const StatusCode = err.StatusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(401).json({
    Sucesss : false,
    message,
    StatusCode
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
