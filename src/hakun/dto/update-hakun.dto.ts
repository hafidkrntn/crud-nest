import { PartialType } from '@nestjs/mapped-types';
import { CreateHakunDto } from './create-hakun.dto';

export class UpdateHakunDto extends PartialType(CreateHakunDto) {}
