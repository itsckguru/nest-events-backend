import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll(): string {
    return 'This action returns all events';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} event, ${id}`;
  }

  @Post()
  create(): string {
    return 'This action creates a new event';
  }

  @Patch(':id')
  update(): string {
    return 'This action updates a #${id} event';
  }
  @Delete(':id')
  delete(): string {
    return 'This action removes a #${id} event';
  }
}
