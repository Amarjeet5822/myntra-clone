import express from "express";
import dotenv from "dotenv";
dotenv.config();

const userRoute = express.Router();

userRoute.post("/login", UserLogin )

export default userRoute;