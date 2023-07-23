import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials:true
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, ()=>{
    console.log('Server running on http://localhost:8000/');
})


const MONGO_URL = "mongodb+srv://a7ath:i0goIFJXfXiivWaD@cluster0.c83bjyc.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error:Error)=>console.log(error));