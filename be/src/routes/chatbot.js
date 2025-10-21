import { Router } from 'express';
import chatbot from '../controllers/chatbot.js';

const router = Router();

router.post('/chatbot/response', chatbot);

export default router;
