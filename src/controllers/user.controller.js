import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async function (req, res) {
  // 1) Get user details from frontend
  // 2) Validation - Not empty
  // 3) Check if user already exists: username, email
  // 4) Check for images, check for avatar
  // 5) Upload them to cloudinary, avatar
  // 6) Create user object - create entry in DB
  // 7) Remove password and refresh token field from response
  // 8) Check for user creation
  // 9) Return res
});

export { registerUser };
