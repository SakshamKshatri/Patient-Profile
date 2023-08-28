import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
});

export default mongoose.model("Admins", AdminSchema);
