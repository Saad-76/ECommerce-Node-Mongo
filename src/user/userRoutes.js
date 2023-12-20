const express = require("express");
const {
  registerUser,
  signInUser,
  updateUser,
  deleteUser,
  forgetPassword,
} = require("./userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signInUser);
router.put("/forget:id", forgetPassword);
router.put("/user", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
