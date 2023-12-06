import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/events.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'example',
            database: 'nest-events',
            entities: [Event],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Event]),
    ],

    controllers: [AppController, EventsController],
    providers: [AppService],
})
export class AppModule {}
