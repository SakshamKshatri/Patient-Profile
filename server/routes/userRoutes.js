import express from "express";

const router = express.Router();

import userController from "../controllers/userController.js";

router.get("/", userController.getUsers);

router
  .route("/user/:id")
  .delete(userController.deleteUser)
  .get(userController.getUserById);

router.post("/register", userController.register);

router.post("/login", userController.login);

router.delete("/user/:id", userController.deleteUser);

export default router;
