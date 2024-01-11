import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './dbConfig/connect';

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const start = () => {
  try {
    server.listen(port, async () => {
      await connectDB();
      console.log(`Server is listening on the port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
