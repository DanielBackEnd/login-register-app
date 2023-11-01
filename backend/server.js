import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/UserRouter.js';
import { notFound, errorHandler } from './middleware/customErrorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use('/users', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}...`));
