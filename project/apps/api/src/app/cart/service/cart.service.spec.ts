import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { Cart } from '../../../entities/cart/cart.entity';



describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService, 
        {
          provide: getRepositoryToken(Cart),
          useFactory: () => ({
            findAll: jest.fn(),
            create: jest.fn(),
            delete: jest.fn()
          })
        }
      ],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
