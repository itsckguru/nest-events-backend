import { Length } from 'class-validator';

export class CreateEventDto {
    @Length(5, 255)
    name: string;
    description: string;
    when: Date;
    address: string;
}
