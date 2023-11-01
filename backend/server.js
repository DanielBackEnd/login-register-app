import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/UserRouter.js';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use('/users', userRouter);

app.get('/', (req, res) => res.send('<h1>It works...</h1>'));

app.listen(port, () => console.log(`Server is running on port ${port}...`));
