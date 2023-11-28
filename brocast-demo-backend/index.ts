import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import IsValidLuhn from './src/services/IsValidLuhn';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/validate', (req: Request, res: Response) => {
    const cardNumber = req.query['cardNumber'] as string
    const valid = IsValidLuhn(cardNumber)
    res.json({
        valid: valid
    })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});