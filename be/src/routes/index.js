import express from "express";
import chatbot from "./chatbot.js";

const app = express();

app.use(express.json());
app.use('/', chatbot);

export default app;