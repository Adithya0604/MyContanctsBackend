const { userContanct } = require("../model/contanct");
const ErrorCodes = require("../ErrorCode");
const mongoose = require("mongoose");

// Should Have the req, res mandatory but next is used the pass it.
async function handleGetAllContancts(req, res) {
  try {
    const userDetails = await userContanct.find();

    return res.status(200).json({
      success: true,
      User_Details: userDetails,
    });
  } catch (err) {
    return res
      .status(ErrorCodes.Bad_Request)
      .json({ success: false, message: `${err.message}` });
  }
}

async function handlePostContancts(req, res) {
  const { Name, Email, Country } = req.body;

  try {
    const existedUser = await userContanct.findOne({ Email: req.body.Email });
    if (existedUser) {
      return res
        .status(ErrorCodes.Key_Duplicte)
        .json({ message: `User with ${req.body.Email} already Exist` });
    }

    const userDetails = new userContanct({ Name, Email, Country });
    const savedUser = userDetails.save();

    return res.status(201).json({
      success: true,
      message: `Created Successfully: ${await savedUser}`,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `Error: ${err.message}` });
  }
}

// REQ, RES, NEXT mandatory
async function handleGetOneContancts(req, res, next) {
  const { id } = req.params; // Case Senstive

  try {
    //Extra Check. Id Format is InValid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(ErrorCodes.Bad_Request).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    // Checking the DB.
    const existedUser = await userContanct.findById(id);
    if (!existedUser) {
      return res.status(ErrorCodes.Bad_Request).json({
        success: false,
        message: `User with Id ${id} not Exist`,
      });
    }

    const userDetails = {
      Name: existedUser.Name,
      Email: existedUser.Email,
      Country: existedUser.Country,
    };

    return res.status(200).json({
      success: true,
      User_Details: userDetails,
    });
  } catch (err) {
    return next(err);
  }
}

async function handlePatchContancts(req, res) {
  const { id } = req.params;

  try {
    if (!req.body) {
      return res.json({
        success: true,
        User_Updation: "No details provided for Updation",
      });
    }
    const user = await userContanct.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    return res
      .status(200)
      .json({ success: true, user_Details_Updation: req.body });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `bad request Patch` });
  }
}

async function handleDeleteContancts(req, res) {
  const { id } = req.params;
  try {
    const existedUser = await userContanct.findByIdAndDelete(id);

    if (!existedUser) {
      return res
        .status(ErrorCodes.Not_Found)
        .json({ success: false, UserDelete: `User with ${id} Not Exist` });
    }

    return res.status(200).json({mes:'good'});
  
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `bad request Delete` });
  }
}

module.exports = {
  handleGetAllContancts,
  handlePostContancts,
  handleGetOneContancts,
  handlePatchContancts,
  handleDeleteContancts,
};
