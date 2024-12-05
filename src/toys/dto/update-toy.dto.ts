import { PartialType } from '@nestjs/mapped-types';
import { CreateToyDto } from './create-toy.dto';

export class UpdateToyDto {
  name?: string;
  material?: string;
  weight?: number;
  childId?: number;
}
