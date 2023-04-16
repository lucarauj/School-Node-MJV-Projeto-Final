import {Schema} from 'mongoose';
import mongoose from 'mongoose';

export interface IEmployee {
    nome: string;
    matricula: string;
    senha: string;
    funcao: string,
    createdAt: string | Date;
}

export const employeeSchema = new Schema<IEmployee>({
    nome: {
        type: String
    },
    matricula: {
        type: String
    },
    senha: {
        type: String
    },
    funcao: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const Employee = mongoose.model<IEmployee>('Employee', employeeSchema);