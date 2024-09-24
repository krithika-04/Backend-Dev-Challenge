import { Router } from "express";
import sleep from './sleepAssesmentRoutes'
import auth from './authRoutes'
const router = Router();
router.use('/sleep',sleep);
router.use('/auth',auth);
export default router;