import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../service/product.service';
import { ProductController } from './product.controller';
import { Product } from '../../../entities/product/product.entity';


describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: getRepositoryToken(Product),
          useValue: {}
        },
        {
          provide: ProductService,
          useFactory: () => ({
            findOne: jest.fn(),
            findAll: jest.fn(),
            create: jest.fn()
          })
        }
      ]
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
