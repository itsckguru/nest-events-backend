import { Resolver, Query } from '@nestjs/graphql';
import { Teacher } from './teacher.entity';

@Resolver(() => Teacher)
export class TeacherResolver {
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
}

@Resolver()
export class FooResolver {
    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }
}
