import { Length } from 'class-validator';

export class CreateEventDto {
    @Length(5, 255, { message: 'Name must be at least 5 characters long' })
    name: string;
    @Length(5, 255)
    description: string;
    @Length(5, 255)
    when: Date;
    @Length(5, 255)
    @Length(10, 255)
    address: string;
}
