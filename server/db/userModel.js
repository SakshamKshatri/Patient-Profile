import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  dob: {
    type: Date,
    required: [true, "Please enter your date of birth"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

export default mongoose.model.Users || mongoose.model("Users", UserSchema);
