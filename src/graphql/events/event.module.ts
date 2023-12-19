import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from '../events/todo.entity';
import { EventResolver } from './events.resolvers';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [EventResolver],
    controllers: [],
})
export class EventsModuleGraphQL {}
