import { Router } from 'express';
import { sleepAssesment  } from '../controllers/sleepAssesmentController';
import { authenticateToken } from '../middlewares/authMiddleware';
authenticateToken
const router = Router();


router.put('/:id', sleepAssesment);
/* 
SAMPLE PROTECTED ROUTE
router.<http method>('/<any end-point>',authenticateToken, <handler>);
*/

export default router;
