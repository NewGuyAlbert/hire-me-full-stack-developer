import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
    public products: ProductDto[] = []

    create(product: ProductDto): ProductDto {
        this.products.push(product)
        return product
    }

    findAll(): ProductDto[] {
        return this.products
    }

}
