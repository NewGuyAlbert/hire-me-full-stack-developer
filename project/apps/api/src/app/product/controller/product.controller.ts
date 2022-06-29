import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';


@Controller('products')
export class ProductController {
    constructor(private service: ProductService){}

    @Get('/')
    findAll(): ProductDto[] {
        return this.service.findAll()
    }

    @Post('/')
    create(@Body() product: ProductDto): ProductDto {
        return this.service.create(product)
    }
}
