import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll(): string {
    return 'This action returns all events';
  }

  @Get()
  findOne(): string {
    return 'This action returns a #${id} event';
  }

  @Post()
  create(): string {
    return 'This action creates a new event';
  }

  @Patch()
  update(): string {
    return 'This action updates a #${id} event';
  }
  @Delete()
  delete(): string {
    return 'This action removes a #${id} event';
  }
}
