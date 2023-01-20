import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  send(): string {
    return 'Hello World!';
  }
}
