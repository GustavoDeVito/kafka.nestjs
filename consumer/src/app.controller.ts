import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('TEST_TOPIC') // topic name here
  getMessage(@Payload() message) {
    return this.appService.getMessage(message);
  }
}
