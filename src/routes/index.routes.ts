import { Router } from "express";
import controllers from '../controllers/index.controller';

const router = Router();

router.get('/', controllers.home);
router.get('/presupuesto', controllers.presupuesto);
router.get('/contact', controllers.contact);
router.get('/galery', controllers.galery);
router.get('*', controllers.notFound);

export default router;
