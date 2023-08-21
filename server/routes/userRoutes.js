import express from "express";
import multer from "multer";
import auth from "../auth.js";
import { storage } from "../cloudinary/index.js";
import userController from "../controllers/userController.js";
import checkRole from "../middleware/checkRole.js";

const upload = multer({ storage });

const router = express.Router();

router.get("/", userController.getUsers);

router
  .route("/user/:id")
  .delete(auth, checkRole("admin"), userController.deleteUser)
  .get(userController.getUserById);

router.post(
  "/register",
  upload.single("profilePicture"),
  (req, res, next) => {
    const imagePath = req.file.path;
    console.log("Image path: " + imagePath);
    res.locals.imagePath = imagePath; // Pass imagePath to the response.locals object
    next();
  },
  userController.register
);

router.post("/login", userController.login);

router.post("/logout", userController.logout);

router.put(
  "/user/:id/edit",
  // auth, // First, authenticate the user
  // checkRole("admin"), // Then, check if the user has the admin role
  upload.single("profilePicture"), // Then, handle the file upload if needed
  userController.updateUser
);

export default router;
