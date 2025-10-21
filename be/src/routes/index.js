import express from "express";
import chatbotRouter from './chatbot.js'

const app = express();

app.use(express.json());
app.use('/', chatbotRouter);


export default app;