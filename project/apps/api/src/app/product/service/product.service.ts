import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from "typeorm"

import { ProductDto } from '../dto/product.dto';
import { Product } from '../../../entities/product/product.entity';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepo: Repository<Product>){}

    findAll(): Promise<ProductDto[]> {
        return this.productRepo.find()
    }

    create(product: ProductDto): Promise<ProductDto> {
        return this.productRepo.save(product)
    }

    findOne(id: number): Promise<ProductDto> {
        return this.productRepo.findOne({where: {id}})
    }
}
