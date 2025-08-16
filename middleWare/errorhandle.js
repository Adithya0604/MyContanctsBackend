const ErrorCodes = require("../ErrorCode");

async function errorHandle(err, req, res, next) {
  const statusCode = err.statusCode;

  switch (statusCode) {
    case ErrorCodes.Bad_Request:
      return res.status(ErrorCodes.Bad_Request).json({
        title: "Bad_Request",
        message: err.message,
        stacktrace: err.stack,
      });

    case ErrorCodes.Unauthorized:
      return res.status(ErrorCodes.Unauthorized).json({
        title: "Unauthorized",
        message: err.message,
        stacktrace: err.stack,
      });

    case ErrorCodes.Forbidden:
      return res.status(ErrorCodes.Forbidden).json({
        title: "Forbidden",
        message: err.message,
        stacktrace: err.stack,
      });

    case ErrorCodes.Method_Not_Allowed:
      return res.status(ErrorCodes.Method_Not_Allowed).json({
        title: "Method_Not_Allowed",
        message: err.message,
        stacktrace: err.stack,
      });

    case ErrorCodes.Not_Found:
      return res.status(ErrorCodes.Not_Found).json({
        title: "Not_Found",
        message: err.message,
        stacktrace: err.stack,
      });

    case ErrorCodes.Key_Duplicte:
      return res.status(ErrorCodes.Key_Duplicte).json({
        title: "Key_Duplicte",
        message: err.message,
        stacktrace: err.stack,
      });

    case ErrorCodes.Too_Many_Requests:
      return res.status(ErrorCodes.Too_Many_Requests).json({
        title: "Too_Many_Requests",
        message: err.message,
        stacktrace: err.stack,
      });

    default:
      return res.status(500).json({ success: false, message: "Server Error yes" });
  }
}

module.exports = errorHandle;
