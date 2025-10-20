import { Router } from "express"

const router = Router();

router.post('/chatbot/response', (req, res) => {
	console.log('from route')
})

export default router;