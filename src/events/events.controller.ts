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
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from 'src/dto/update-event.dto';
import { Event } from './events.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('/events')
export class EventsController {
    private readonly logger = new Logger(EventsController.name);
    constructor(
        @InjectRepository(Event)
        private readonly respository: Repository<Event>,
    ) {}

    @Get()
    async findAll() {
        this.logger.log('Hit the findAll route');
        const events = await this.respository.find();
        this.logger.debug(`Found ${events.length} events`);
        return events;
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const query = {
            where: { id: id },
        };
        return await this.respository.findOne(query);
    }

    @Post()
    async create(
        @Body(new ValidationPipe())
        input: CreateEventDto,
    ) {
        return await this.respository.save({
            ...input,
            when: new Date(input.when),
        });
    }

    @Patch(':id')
    async update(
        @Param('id') id,
        @Body(new ValidationPipe())
        input: UpdateEventDto,
    ) {
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

        if (!event) {
            throw new NotFoundException(`Event with id ${id} not found`);
        }
        await this.respository.remove(event);
    }
}
