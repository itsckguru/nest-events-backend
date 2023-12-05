import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from 'src/dto/update-event.dto';

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
  create(@Body() input: CreateEventDto): object {
    console.log(input.address);
    return input;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    return input;
  }
  @Delete(':id')
  @HttpCode(204)
  delete(): string {
    return 'This action removes a #${id} event';
  }
}
