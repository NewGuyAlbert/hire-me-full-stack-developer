import { Module } from '@nestjs/common';

//controller
import { AppController } from './app.controller';

//modules
import { ProductModule } from './product/product.module';


@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
