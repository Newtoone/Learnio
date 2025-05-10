const express = require("express");
const userControllers = require("../controllers/user")

const router = express.Router();

router.get("/getAllUsers",userControllers.getAllUsers); //localhost:5000/user/getAllusers
router.post("/createUser",userControllers.createUser);
router.put("/updateUser/:id",userControllers.updateUser);
router.delete("/deleteUser/:id",userControllers.deleteUser);
router.post("/login",userControllers.login);

module.exports = router;