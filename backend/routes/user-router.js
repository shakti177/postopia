const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  testUser,
} = require("../controllers/authController");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
  res.send("Hello from the user router!");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", isLoggedIn, logoutUser);

router.patch("/update", isLoggedIn, updateUser);

router.get("/test", testUser);

module.exports = router;
