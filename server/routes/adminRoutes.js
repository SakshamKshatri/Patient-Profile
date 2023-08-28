import express from "express";
import adminController from "../controllers/adminController.js";

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("Entering /signup route");
  adminController.signup(req, res);
});

router.post("/signin", (req, res) => {
  adminController.signin(req, res)
})

export default router;
