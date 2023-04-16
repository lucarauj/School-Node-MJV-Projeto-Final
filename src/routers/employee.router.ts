import { Request, Response, Router } from 'express';
import EmployeesService from '../services/employees.service';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const employees = await EmployeesService.getAll();
    res.send(employees);
});

router.get('/:matricula', authorizationMiddleware, async (req: Request, res: Response) => {
    const employee = await EmployeesService.getByMatricula(req.params.matricula);
    if(!employee) {
        return res.status(400).send({message: 'Funcionário não encontrado!'});
    }
    res.status(200).send(employee);
});

router.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await EmployeesService.create(req.body);
        res.status(201).send({message: 'Funcionário cadastrado com sucesso'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }
});

router.post('/authorization', async (req: Request, res: Response) => {
    try {
        const token = await EmployeesService.authorization(req.body.matricula, req.body.senha);
        res.status(200).send({token});
    } catch(error: any) {
        res.status(401).send({message: error.message});
    }
});

router.put('/:matricula', authorizationMiddleware, async (req: Request, res: Response) => {
    try{
        await EmployeesService.update(req.params.matricula, req.body)
        res.status(200).send({message: 'Funcionário atualizado com sucesso'});
    } catch(error: any) {
        return res.status(400).send({message: error.message});
    }   
});

router.delete('/remove/:matricula', authorizationMiddleware, async (req: Request, res: Response) => {
    try{
        await EmployeesService.remove(req.params.matricula);
        res.status(200).send({message: 'Funcionário excluído com sucesso'});
    } catch(error: any) {
        return res.status(400).send({message: error.message});
    }    
});

export default router;