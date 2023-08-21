import User from "../db/userModel.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

const register = asyncHandler(async (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        fullName: request.body.fullName,
        dob: request.body.dob,
        gender: request.body.gender,
        phoneNumber: request.body.phoneNumber,
        streetAddress: request.body.streetAddress,
        city: request.body.city,
        zipCode: request.body.zipCode,
        profilePicture: {
          url: request.file.path,
          filename: request.file.filename,
        },
        email: request.body.email,
        password: hashedPassword,
      });
      console.log(user);
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          if (error.name == "ValidationError") {
            console.error("Validation Error: " + error);
          }
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

const login = asyncHandler(async (request, response) => {
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Email or Password didn't match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

const logout = asyncHandler(async (req, res) => {
  const decodedToken = req.user;
  res.status(200).json({ message: "Logout successful" });
});

const updateUser = asyncHandler(async (req, res) => {
  const { fullName, dob, gender, streetAddress, phoneNumber, city, zipCode } =
    req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user properties
    user.fullName = fullName;
    user.dob = dob;
    user.gender = gender;
    user.streetAddress = streetAddress;
    user.phoneNumber = phoneNumber;
    user.city = city;
    user.zipCode = zipCode;

    // Check if profilePicture is included in the request
    if (req.file) {
      user.profilePicture = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // Save the updated user
    await user.save();

    // Respond with the updated user data
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "user removed successfully" });
  } else {
    res.status(404);
    throw new Error("cannot delete, User not found");
  }
});

export default {
  getUsers,
  getUserById,
  register,
  login,
  updateUser,
  deleteUser,
  logout,
};
