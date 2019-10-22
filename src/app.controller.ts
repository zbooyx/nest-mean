import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('root')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('hello')
  getHello(): object {
    return this.appService.getHello();
  }
}
