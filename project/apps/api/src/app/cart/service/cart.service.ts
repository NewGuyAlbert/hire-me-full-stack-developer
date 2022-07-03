import { Injectable } from '@nestjs/common';
import { CartDto } from '../dto/cart.dto';

import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from "typeorm"
import { Cart } from '../../../entities/cart/cart.entity';

@Injectable()
export class CartService {

    constructor(@InjectRepository(Cart) private cartRepo: Repository<Cart>){}

    findAll(): Promise<CartDto[]> {
        return this.cartRepo.find()
    }

    create(product: CartDto): Promise<CartDto> {
        return this.cartRepo.save(product)
    }

    delete(id: number){
        return this.cartRepo.delete({id})
    }

    deleteAll(){
        return this.cartRepo.clear()
    }
}
