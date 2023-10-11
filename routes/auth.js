const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);
})

module.exports = router;