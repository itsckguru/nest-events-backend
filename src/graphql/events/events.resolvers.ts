import { Resolver, Query } from '@nestjs/graphql';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Todo } from '../events/todo.entity';

@Resolver(() => Todo)
export class EventResolver {
    private readonly logger = new Logger(EventResolver.name);

    constructor(
        @InjectRepository(Todo)
        private readonly eventsRepository: Repository<Todo>,
    ) {}

    @Query(() => [Todo])
    public async events(
        @Args('id', { type: () => Int })
        id: number,
    ): Promise<Todo> {
        try {
            const events = await this.eventsRepository.find({
                where: { id },
            });
            console.log('events====>', events);
            return events[0];
        } catch (err) {
            console.log('err====>', err);
        }
    }
}
