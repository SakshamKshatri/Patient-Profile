import mongoose from "mongoose";

const timeElapsed = Date.now();
const registered = new Date(timeElapsed);
const today = registered.toDateString();


const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  dob: {
    type: Date,
    required: [true, "Please enter your date of birth"],
  },
  gender: {
    type: String,
    required: [true, "Please enter your gender"],
  },
  streetAddress: {
    type: String,
    required: [true, "Please enter your address"],
  },
  city: {
    type: String,
    required: [true, "Please enter your city"],
  },
  zipCode: {
    type: Number,
    required: [true, "Please enter your zip code"],
  },
  registeredDate: {
    type: Number,
    default: today
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your phone number"],
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
