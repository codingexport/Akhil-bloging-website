import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken"; // Import JWT library

// AUTHENTICATION
export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("User is not authenticated!", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify the token

  req.user = await User.findById(decoded.id); // Find the user by ID from the decoded token

  next(); // Proceed to the next middleware
});

// AUTHORIZATION
export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `User with this role(${req.user.role}) not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};