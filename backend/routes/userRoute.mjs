import express from "express";
import dotenv from "dotenv";
import { UserLogin, UserUpdate } from "../controllers/authController.mjs";
dotenv.config();

const userRoute = express.Router();

userRoute.post("/login", UserLogin )
userRoute.patch("/", UserUpdate )

export default userRoute;