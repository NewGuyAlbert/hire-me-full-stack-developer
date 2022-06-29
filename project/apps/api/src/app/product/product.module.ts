import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from '../../entities/product/product.entity'
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
