import asyncHandler from 'express-async-handler';

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'User logged' });
});

export { loginUser };
