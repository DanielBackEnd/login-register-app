import asyncHandler from 'express-async-handler';

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User logged' });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User registered' });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User logouted' });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User profile...' });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User profile updated' });
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
