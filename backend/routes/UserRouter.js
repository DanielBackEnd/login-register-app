import express from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/logout', logoutUser);
userRouter.get('/profile', getUserProfile);
userRouter.put('/profile', updateUserProfile);

export default userRouter;
