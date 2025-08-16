require("dotenv").config();
const mongoose = require("mongoose");

const CONNECTION_URL = process.env.CONNECTION_URL;

async function Connect() {
  try {
    await mongoose.connect(CONNECTION_URL);
    console.log("Mongoose Connected");
  } catch (error) {
    console.error(`Error:, ${error.message}`);
    process.exit(1);
  }
}

module.exports = Connect;
