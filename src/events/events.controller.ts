import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from 'src/dto/update-event.dto';
import { Event } from './events.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('/events')
export class EventsController {
    // private events: Event[] = [];
    constructor(
        @InjectRepository(Event)
        private readonly respository: Repository<Event>,
    ) {}

    @Get()
    async findAll() {
        return await this.respository.find();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const query = {
            where: { id: id },
        };
        return await this.respository.findOne(query);
    }

    @Post()
    async create(@Body(ValidationPipe) input: CreateEventDto) {
        return await this.respository.save({
            ...input,
            when: new Date(input.when),
        });
    }

    @Patch(':id')
    async update(@Param('id') id, @Body() input: UpdateEventDto) {
        const event = await this.respository.findOne(id);

        return await this.respository.save({
            ...event,
            ...input,
            when: input.when ? new Date(input.when) : event.when,
        });
    }
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id) {
        const event = await this.respository.findOne(id);
        await this.respository.remove(event);
    }
}
