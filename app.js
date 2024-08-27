import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js'
import { errorMiddleware } from './middlewares/error.js'; 
import userRouter from './routes/userRouter.js';
import fileUpload from 'express-fileupload';
import blogRouter from './routes/blogRouter.js';

const app = express();

dotenv.config({path:'./config/config.env'});
dotenv.config();
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","PUT","DELETE","POST"],
  credentials: true
}))


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1", userRouter);
app.use("/api/v1", blogRouter);

dbConnection();

app.use(errorMiddleware);

export default app;