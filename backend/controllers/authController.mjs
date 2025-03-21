import User from "../models/user.model.mjs";
import AppError from "../utils/AppError.mjs";

const UserLogin = async (req, res, next) => {
  const { mobileNumber } = req.body;
  try {
    const user = await User.findOne({ mobileNumber });
    if (user) {
      res.status(200).json({ message: "Login Successfull" });
    } else {
      const newUser = new User({ mobileNumber });
      await newUser.save();
      res.status(200).json({ message: "Login Successfull" });
    }
  } catch (error) {
    next(new AppError(500,  "Failed to Login" || error?.message))
  }
};

const UserUpdate = async (req, res, next ) => {
  const { mobileNumber } = req.body;
  try {
    const user = await User.findOne({ mobileNumber });
    if (user) {
      res.status(200).json({ message: "Login Successfull" });
    } else {
      const newUser = new User({ mobileNumber });
      await newUser.save();
      res.status(200).json({ message: "Login Successfull" });
    }
  } catch (error) {
    next(new AppError(500,  "Failed to Login" || error?.message))
  }
}

export { UserLogin, UserUpdate };
