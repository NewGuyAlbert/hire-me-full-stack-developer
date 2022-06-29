import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entities
import { Product } from '../entities/product/product.entity'
import { Cart } from '../entities/cart/cart.entity';

//controller
import { AppController } from './app.controller';

//modules
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "postgres",
      entities: [
        Product,
        Cart
      ],
      synchronize: true,
  }),
    ProductModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
