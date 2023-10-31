import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => res.send('<h1>It works...</h1>'));

app.listen(port, () => console.log(`Server is running on port ${port}...`));
