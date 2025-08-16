const express = require("express");

const UserRouter = express.Router();

const {
  handleGetAllContancts,
  handlePostContancts,
  handleGetOneContancts,
  handlePatchContancts,
  handleDeleteContancts,
} = require("../controller/contanct");

const {
  handleContanctMiddleWarePost,
  handleContanctMiddleWareGetOne,
  handleContanctMiddleWarePatch,
  handleContanctMiddleWareDelete,
} = require("../middleWare/contanct");

UserRouter.route("")
  .get(handleGetAllContancts)
  .post(handleContanctMiddleWarePost, handlePostContancts);

UserRouter.route("/:id") //Route Passed should be same along the application
  .get(handleContanctMiddleWareGetOne, handleGetOneContancts)
  .patch(handleContanctMiddleWarePatch, handlePatchContancts)
  .delete(handleContanctMiddleWareDelete, handleDeleteContancts);

module.exports = { UserRouter };
