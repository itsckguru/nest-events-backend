// export class UpdateEventDto {
//   name?: string;
//   description?: string;
//   when?: Date;
//   address?: string;
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from '../dto/create-event.dto';
export class UpdateEventDto extends PartialType(CreateEventDto) {}
