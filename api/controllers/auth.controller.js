import User from "../models/usermodel.js";
import bcrypt from 'bcryptjs'
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedpassword = bcrypt.hashSync(password,10)   // Now the password is hashed using bcrypt
  const newUser = new User({ username, email, password:hashedpassword});
  try {
    await newUser.save();
    res.status(201).json({
      mssg: "user Created Succesfully",
    });
  } catch (error) {
    //  console.log("User may b are same  or server error");
    return res.status(403).json({ mssg: "failed to create user" });
  }
};
