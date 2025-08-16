const express = require("express");

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ContanctSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Please Enter the Name..."],
    },
    Email: {
      type: String,
      required: [true, "Please Enter the Email ID..."],
      unique: true,
    },
    Country: {
      type: String,
      default: "India",
    },
  },
  { timeStamps: true }
);

const userContanct = mongoose.model("userContancts", ContanctSchema);

module.exports = { userContanct };

/* Design of Schema is Simple: 
1. Import the mongoose and destructure the Schema from mongoose
2. Create Instance of Schema by using this new keyword and mongoose method Schema.
3. Create the blue print of the Schema with keys and values with rulz
4. Create the Table using this Schema and have that reference in varaible and export that.
 */
