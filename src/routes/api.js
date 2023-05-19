const { getAllUsers, getOneUser } = require("../controller/apiController");
const express = require("express");
const router = express.Router();
// const { getOneUser, getAllUsers } = apiController;
router.get("/users", getAllUsers);
router.get("/user", getOneUser);
module.exports = router;
