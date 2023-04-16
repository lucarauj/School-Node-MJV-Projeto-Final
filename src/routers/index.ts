import { Router } from 'express';
import employeesRouter from './employee.router';
import productsRouter from './product.router';

const router = Router();

router.use('/employees', employeesRouter);
router.use('/products', productsRouter);

export default router;