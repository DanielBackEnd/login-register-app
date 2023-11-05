import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/UserRouter.js';
import { notFound, errorHandler } from './middleware/customErrorMiddleware.js';
import connectDB from './utils/db.js';

dotenv.config();

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}...`));
