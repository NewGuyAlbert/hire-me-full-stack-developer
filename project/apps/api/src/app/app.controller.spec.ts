import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();
  });

  describe('getData', () => {
    const expected = { info: 
      { routes: [
          "/product",
          "/cart"
        ]
      }
    }
    it('should return routes', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual(expected);
    });
  });
});
