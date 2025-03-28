import express from "express";
import dotenv from "dotenv";
import { UserGet, UserLogin, UserLogout } from "../controllers/authController.mjs";
import { IsUserAuthenticated } from "../middleware/authUser.mjs";
dotenv.config();

const userRoute = express.Router();

userRoute.post("/login", UserLogin );
userRoute.get("/", IsUserAuthenticated, UserGet);
userRoute.post("/logout", IsUserAuthenticated, UserLogout );

export default userRoute;



// userRoute.patch("/", UserUpdate ); Future update 