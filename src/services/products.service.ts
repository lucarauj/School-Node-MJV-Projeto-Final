import ProductRepository from "../repositories/product.repository";
import { IProduct } from "../models/product.model";

class ProductsService {

    getAll() {
        return ProductRepository.getAll();
    }

    getByCodigo(codigo: string) {
        return ProductRepository.getByCodigo(codigo);
    }

    async create(product: IProduct) {
        const prod = await ProductRepository.getByCodigo(product.codigo);
        
        if(prod) throw new Error('Código do produto já cadastrado!');

        return ProductRepository.create(product);
    }

    async update(codigo: string, product: Partial<IProduct>) {
        const prod = await ProductRepository.getByCodigo(codigo);
        
        if(!prod) throw new Error('Produto não encontrado!');

        return ProductRepository.update(codigo, product);
    }

    async remove(codigo: string) {
        const prod = await ProductRepository.getByCodigo(codigo);
        
        if(!prod) throw new Error('Produto não encontrado!');
        
        return ProductRepository.remove(codigo);
    }
}

export default new ProductsService();