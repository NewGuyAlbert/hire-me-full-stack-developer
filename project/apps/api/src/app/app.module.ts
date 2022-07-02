import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entities
import { entities } from '../entities';

//controller
import { AppController } from './app.controller';

//modules
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

//for deploying
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'shop'),
      exclude: ['/api*']
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: entities,
      synchronize: true,
    }),
      ProductModule,
      CartModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
