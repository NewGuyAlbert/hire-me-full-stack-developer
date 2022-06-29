import { IsNumber } from "class-validator";

export class CartDto {
    @IsNumber()
    id: number;

    @IsNumber()
    productId: number;
}
