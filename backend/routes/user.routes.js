import { Router } from 'express';
import { protectRoute } from '../middleware/protect.route.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = Router();

router.get('/', protectRoute, getUsersForSidebar);

export default router;
