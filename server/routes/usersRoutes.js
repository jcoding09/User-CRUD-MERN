const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersControllers");

// POST /api/users - Create a new user
router.post("/", usersController.createUser);

// GET /api/users - Get all users
router.get("/", usersController.getAllUsers);

// GET /api/users/:id - Get a single user by ID
router.get("/:id", usersController.getUserById);

// PUT /api/users/:id - Update a user by ID
router.put("/:id", usersController.updateUser);

// DELETE /api/users/:id - Delete a user by ID
router.delete("/:id", usersController.deleteUser);

module.exports = router;
