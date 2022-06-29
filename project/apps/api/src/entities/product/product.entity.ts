import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cart } from "../cart/cart.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column()
    description: string;

    @Column({nullable: false})
    price: number;

    @OneToMany(() => Cart, cart => cart.product)
    carts: Cart;
}