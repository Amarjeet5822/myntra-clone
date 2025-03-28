import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  number:{ type:String, unique: true, required: true },
  name: {type: String, required: true },
  password: {type: String, default: "" },
  profiles: {
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
