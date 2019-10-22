import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      success: 200,
      data: 'hello'
    };
  }
}
