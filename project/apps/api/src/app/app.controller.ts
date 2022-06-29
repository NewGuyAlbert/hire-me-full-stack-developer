import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getData(): unknown {
    return {info: {
      routes: [
        "/product",
        "/cart"
      ]
    }}
  }
}
