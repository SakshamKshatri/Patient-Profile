import express from "express";
import multer from "multer";
import auth from "../auth.js";
import { storage } from "../cloudinary/index.js";
import patientController from "../controllers/patientController.js";
import checkRole from "../middleware/checkRole.js";

const upload = multer({ storage });

const router = express.Router();

router.get("/", patientController.getUsers);

router
  .route("/user/:id")
  .delete(auth, patientController.deleteUser)
  .get(patientController.getUserById);

router.post(
  "/register",
  upload.single("profilePicture"),
  (req, res, next) => {
    const imagePath = req.file.path;
    console.log("Image path: " + imagePath);
    res.locals.imagePath = imagePath; // Pass imagePath to the response.locals object
    next();
  },
  patientController.register
);

router.post("/login", patientController.login);

router.post("/logout", patientController.logout);

router.put(
  "/user/:id/edit",
  auth,
  // checkRole("admin"),
  upload.single("profilePicture"), // Then, handle the file upload if needed
  patientController.updateUser
);

export default router;
