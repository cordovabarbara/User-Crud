const { getAll, create, getOneUser, removeUser, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(create)

userRouter.route("/:id")
		.get(getOneUser)
		.delete(removeUser)
		.put(update)


module.exports = userRouter;