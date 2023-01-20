import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    // Need to subscribe to topic
    // so that we can get the response from kafka microservice
    this.client.subscribeToResponseOf('TEST_TOPIC');
    await this.client.connect();
  }

  send() {
    this.client.emit('TEST_TOPIC', 'Hello!');
  }
}
