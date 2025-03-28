import User from "../models/user.model.mjs";
import AppError from "../utils/AppError.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
 
const generateToken = (user, res) => {
  const refreshToken = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // Prevents XSS attacks
    secure: process.env.NODE_ENV === "production", // `false` in development, `true` in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax", // `Strict` can block requests in some cases, `Lax` is better for authentication
    maxAge: 7 * 24 * 60 * 60 * 1000, // Seven Days
  });
}

const UserLogin = async (req, res, next) => {
  const { number, name } = req.body;
  try {
    const user = await User.findOne({ number });
    if (user) {
      generateToken(user, res);
      res.status(200).json({ message: "Login Successfull", user:{...user.toObject(), isAuthenticated: true} });
    } else {
      const newUser = new User(req.body);
      await newUser.save().catch(err => console.error("MongoDB Save Error:", err));
      generateToken(newUser, res);
      res.status(200).json({ message: "Login Successfull", user:{...newUser.toObject(), isAuthenticated: true} });
    }
  } catch (error) {
    next(new AppError(500,  "Failed to Login" || error?.message))
  }
};

const UserLogout = async (req, res, next ) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return next(new AppError(400, "No token provided"));
    }
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // `false`
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax", // `Strict` can block requests in some cases, `Lax` is better for authentication
    });
    res.status(200).json({ message: "logout Successful!" });
  } catch (error) {
    next(new AppError(500, error.message));
  }
}

const UserGet = async (req, res, next ) => {
  const token = req.cookies.refreshToken
  if(!token) {
    return next(new AppError(440, "Login First! Invalid Token"))
  }
  try {
    const { userId } = req.user
    const user = await User.findOne({ _id: userId });
    res.status(200).json({...user.toObject(), isAuthenticated: true});
  } catch (error) {
    next(new AppError(500,  "Failed to Login" || error?.message))
  }
}

export { UserLogin, UserLogout, UserGet };

