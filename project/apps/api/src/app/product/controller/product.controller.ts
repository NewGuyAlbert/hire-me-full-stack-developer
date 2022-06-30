import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';


@Controller('products')
export class ProductController {
    constructor(private service: ProductService){}
    
    @Get('/:id')
    findOne(@Param('id') id: number): Promise<ProductDto> {
        return this.service.findOne(id)
    }

    @Get('/')
    findAll(): Promise<ProductDto[]> {
        return this.service.findAll()
    }

    @Post('/')
    create(@Body() product: ProductDto): Promise<ProductDto> {
        return this.service.create(product)
    }

}
