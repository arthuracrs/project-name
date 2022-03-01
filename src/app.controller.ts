import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schema/message.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    private readonly appService: AppService,
  ) {}

  @MessagePattern('test-topic')
  processsMessage(@Payload() message: any): any {
    console.log(message.value);
    const createdMessage = new this.messageModel({
      messageValue: JSON.stringify(message.value),
    });
    return createdMessage.save();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
