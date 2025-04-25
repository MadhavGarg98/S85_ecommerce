const jwt = require('jsonwebtoken');
const User = require('../model/user');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  let token;

  // Try cookie first
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
    console.log("Token from cookies:", token);
  } 
  // Fallback to Authorization header
  else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token from Authorization header:", token);
  }

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  try {
    const decodedData = jwt.verify(token, "randomtoken1234567890");
    console.log("Decoded data:", decodedData);
    req.user = await User.findById(decodedData.id);
    if (!req.user) {
      return next(new ErrorHandler("User not found", 404));
    }
    next();
  } catch (err) {
    console.error("JWT verification error:", err.name, err.message);
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
});

module.exports = { isAuthenticatedUser };
