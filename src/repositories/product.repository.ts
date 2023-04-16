import { IProduct, Product } from "../models/product.model";

class ProductRepository {
    getAll() {
        return Product.find();
    }

    getByCodigo(codigo: string) {
        return Product.findOne({codigo: codigo});
    }

    create(product: IProduct) {
        return Product.create(product);
    }

    update(codigo: string, product: Partial<IProduct>) {
        return Product.updateOne({codigo: codigo}, {$set: product});
    }

    remove(codigo: string) {
        return Product.deleteOne({codigo: codigo});
    }
}

export default new ProductRepository();