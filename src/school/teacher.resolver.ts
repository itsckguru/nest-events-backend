import { Resolver, Query } from '@nestjs/graphql';
import { Teacher } from './teacher.entity';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
@Resolver(() => Teacher)
export class TeacherResolver {
    private readonly logger = new Logger(TeacherResolver.name);

    constructor(
        @InjectRepository(Teacher)
        private readonly teachersRepository: Repository<Teacher>,
    ) {}

    @Query(() => [Teacher])
    public async teacher(): Promise<Teacher[]> {
        const teacher_data = [
            {
                id: 123,
                name: 'chandan',
                gender: 'Male',
            },
        ];
        return teacher_data as Teacher[];
    }

    @Query(() => [Teacher])
    public async teacherFromDb(
        @Args('id', { type: () => Int })
        id: number,
    ): Promise<Teacher> {
        try {
            const teachers = await this.teachersRepository.find({
                where: { id },
            });
            console.log('teachers====>', teachers);
            return teachers[0];
        } catch (err) {
            console.log('err====>', err);
        }
    }
}

@Resolver()
export class FooResolver {
    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }
}
