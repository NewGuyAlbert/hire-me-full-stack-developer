import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Product } from "../product/product.entity"

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'productId' })
    productId: number;

    @ManyToOne(() => Product, product => product.carts)
    @JoinColumn({ name: 'productId' })
    product: Product;
}
