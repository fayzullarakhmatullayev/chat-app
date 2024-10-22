import { Router } from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import { protectRoute } from '../middleware/protect.route.js';

const router = Router();

router.post('/send/:id', protectRoute, sendMessage);
router.get('/:id', protectRoute, getMessages);

export default router;
