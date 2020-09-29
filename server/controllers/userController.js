const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModel');

// @desc       Get all users
// @route      GET /api/users
// @access     Public
exports.getAllUsers = asyncHandler(async(req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    count: users.length,
    users
  });
});
