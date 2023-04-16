import {Schema} from 'mongoose';
import mongoose from 'mongoose';

export interface IProduct {
    codigo: string;
    descricao: string;
    preco: number;
    quantidade: number,
    createdAt: string | Date;
}

export const productSchema = new Schema<IProduct>({
    codigo: {
        type: String
    },
    descricao: {
        type: String
    },
    preco: {
        type: Number
    },
    quantidade: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const Product = mongoose.model<IProduct>('Product', productSchema);