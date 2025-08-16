//Loading DotEnv Configration/Setting File and calling it immedialty
require("dotenv").config();

//Importing Express
const express = require("express");

//Instance of Express
const app = express();

//Connection Established with MongoDB
const Connect = require("./connection");
Connect();

//MiddleWares && Routes Conneted
const { UserRouter } = require("./routes/contanct");
const errorHandle = require("./middleWare/errorhandle");

//Port Established From ENV
const PORT = process.env.PORT || 5001;

//Parser for the Request Object
app.use(express.json());

//Endpoints API
app.use("/api/contanct/", UserRouter);

//Error Handler File Implemeted From MiddleWares
app.use(errorHandle);

//Server Listen from Port Activated
app.listen(PORT, () => console.log(`server has been started at ${PORT}`));
