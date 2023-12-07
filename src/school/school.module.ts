import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Teacher } from './teacher.entity';
import { TeacherResolver, FooResolver } from './teacher.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Teacher])],
    providers: [TeacherResolver, FooResolver],
    controllers: [],
})
export class SchoolModule {}
