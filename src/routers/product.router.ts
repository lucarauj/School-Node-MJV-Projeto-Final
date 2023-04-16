import { Request, Response, Router } from 'express';
import ProductsService from '../services/products.service';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const products = await ProductsService.getAll();
    res.send(products);
});

router.get('/:codigo', authorizationMiddleware, async (req: Request, res: Response) => {
    const product = await ProductsService.getByCodigo(req.params.codigo);
    if(!product) {
        return res.status(400).send({message: 'Produto não encontrado!'});
    }
    res.status(200).send(product);
});

router.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
    try{
        await ProductsService.create(req.body);
        res.status(201).send({message: 'Produto cadastrado com sucesso'});
    } catch(error: any) {
        return res.status(400).send({message: error.message});
    }
});

router.put('/:codigo', authorizationMiddleware, async (req: Request, res: Response) => {
    try{
        await ProductsService.update(req.params.codigo, req.body);
        res.status(200).send({message: 'Produto atualizado com sucesso'});
    } catch(error: any) {
        return res.status(400).send({message: error.message});
    }
});

router.delete('/remove/:codigo', authorizationMiddleware, async (req: Request, res: Response) => {
    try{
        await ProductsService.remove(req.params.codigo);
        res.status(200).send({message: 'Produto excluído com sucesso'});
    } catch(error: any) {
        return res.status(400).send({message: error.message});
    }
});

export default router;