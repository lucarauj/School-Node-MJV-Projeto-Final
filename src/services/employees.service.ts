import EmployeeRepository from "../repositories/employee.repository";
import { IEmployee } from "../models/employee.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class EmployeesService {

    getAll() {
        return EmployeeRepository.getAll();
    }

    getByMatricula(matricula: string) {
        return EmployeeRepository.getByMatricula(matricula);
    }

    async create(employee: IEmployee) {
        const empl = await EmployeeRepository.getByMatricula(employee.matricula);
        
        if(empl) throw new Error('Matrícula já cadastrada!');

        if(employee.senha) {
            employee.senha = await bcrypt.hash(employee.senha, 10);
        }
        
        return EmployeeRepository.create(employee);
    }

    async authorization(matricula: string, senha: string) {
        const employee = await EmployeeRepository.getByMatricula(matricula);

        if(!employee) throw new Error('Funcionário não encontrado!');

        const result = await bcrypt.compare(senha, employee.senha);

        if(result) {
            return jwt.sign({matricula: employee.matricula, _id: employee._id}, secretJWT, {
                expiresIn: '1h'
            });
        };

        throw new Error('Falha na autenticação!');
    }

    async update(matricula: string, employee: Partial<IEmployee>) {
        const empl = await EmployeeRepository.getByMatricula(matricula);

        if(!empl) throw new Error('Funcionário não encontrado!');

        if(employee.senha) {
            employee.senha = await bcrypt.hash(employee.senha, 10);
        }

        return EmployeeRepository.update(matricula, employee);
    }

    async remove(matricula: string) {
        const empl = await EmployeeRepository.getByMatricula(matricula);

        if(!empl) throw new Error('Funcionário não encontrado!');

        return EmployeeRepository.remove(matricula);
    }
}

export default new EmployeesService();