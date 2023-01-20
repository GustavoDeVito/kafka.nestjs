import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('kafka')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('send')
  send(): string {
    return this.appService.send();
  }
}
