import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  mobileNumber:{ type:String, unique: true, required: true },
  password: {type: String, default: "" },
  profiles: {
    fullName: {type: String, default: "" },
    email: {type: String, default: "" },
    gender: {type: String, enum: ["Male", "Female"], default: null },
    dob: {type: String, default:null },
  }
}, {
  versionKey: false,
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User; 
