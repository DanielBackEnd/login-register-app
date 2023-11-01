import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User logged' });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid data, user has not been created');
  }
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
