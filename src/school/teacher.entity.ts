import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Gender } from './school.types';

@Entity()
@ObjectType()
export class Teacher {
    constructor(partial?: Partial<Teacher>) {
        Object.assign(this, partial);
    }

    @PrimaryGeneratedColumn()
    @Field({ nullable: true })
    id: number;

    @Column()
    @Field()
    name: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.Other,
    })
    @Field(() => Gender)
    gender: Gender;
}
