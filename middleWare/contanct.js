const { default: mongoose } = require("mongoose");
const ErrorCodes = require("../ErrorCode");

function handleContanctMiddleWarePost(req, res, next) {
  const { Name, Email, Country } = req.body;

  if (!Name || !Email || !Country) {
    const error = new Error("All the fields are Madatory");
    error.statusCode = 400;
    return next(error);
  }
  next();
}

//Request Params & Request Query are differnet. Case Senstive too.
function handleContanctMiddleWareGetOne(req, res, next) {
  const { id } = req.params;

  if (!id) {
    const error = new Error("Id field is Madatory");
    error.statusCode = ErrorCodes.Bad_Request;
    res.next(error);
  }
  next(); // Using next() then pass that too into arguments.
}

function handleContanctMiddleWarePatch(req, res, next) {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Invalid Id Type Or Not Provided");
    error.statusCode = ErrorCodes.Bad_Request;
    res.next(error);
  }
  next();
}

function handleContanctMiddleWareDelete(req, res, next) {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Invalid Id type Or ID not found");
    const status = ErrorCodes.Bad_Request;
    res.next(error);
  }
  next();
}

module.exports = {
  handleContanctMiddleWarePost,
  handleContanctMiddleWareGetOne,
  handleContanctMiddleWarePatch,
  handleContanctMiddleWareDelete,
};
