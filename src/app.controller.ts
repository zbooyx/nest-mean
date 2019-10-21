import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('dddd')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('eloszka')
  getHello(): object {
    return this.appService.getHello();
  }
}
