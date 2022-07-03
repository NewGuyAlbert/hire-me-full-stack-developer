import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartDto } from '../dto/cart.dto';
import { CartService } from '../service/cart.service';

@Controller('cart')
export class CartController {
    constructor(private service: CartService){}

    @Get('/')
    findAll(): Promise<CartDto[]> {
        return this.service.findAll()
    }

    @Post('/')
    create(@Body() cart: CartDto): Promise<CartDto> {
        return this.service.create(cart)
    }

    @Delete('/:id')
    delete(@Param('id') id: number){
        return this.service.delete(id)
    }

    @Delete('/')
    deleteAll(){
        return this.service.deleteAll()
    }


}
