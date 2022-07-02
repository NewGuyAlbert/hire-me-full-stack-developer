import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from '../service/cart.service';
import { CartController } from './cart.controller';
import { Cart } from '../../../entities/cart/cart.entity';


describe('CartController', () => {
  let controller: CartController;
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: getRepositoryToken(Cart),
          useValue: {}
        },
        {
          provide: CartService,
          useFactory: () => ({
            findAll: jest.fn(),
            create: jest.fn(),
            delete: jest.fn()
          })
        }
      ]
    }).compile();

    controller = module.get<CartController>(CartController);
    service = module.get<CartService>(CartService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
