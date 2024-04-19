import express from "express";
import { signup } from "../controllers/auth.controller.js";
const router = express.Router();


router.post('/signup' , signup)     // this /signup comes after the url i.e localhost:3000/api/auth/signup  

export default router;