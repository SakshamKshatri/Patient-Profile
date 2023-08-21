import mongoose from "mongoose";

const Schema = mongoose.Schema;

// const ImageSchema = new Schema({
//   url: String,
//   filename: String,
// });

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
  profilePicture: {
    url: String,
    filename: String,
  },
  registeredDate: {
    type: Number,
    default: Date.now(),
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
  role: String,
});

export default mongoose.model("Users", UserSchema);
