import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(message) {
    console.log('LOG', message);
  }
}
