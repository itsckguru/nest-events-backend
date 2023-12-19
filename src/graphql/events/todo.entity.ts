import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Todo {
    @Field()
    id: number;

    @Field({ nullable: true })
    @Column()
    taskName: string;

    @Field({ nullable: true })
    @Column()
    description: string;

    @Field({ nullable: true })
    @Column()
    when: Date;
}
