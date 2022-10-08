import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HakunService } from './hakun.service';
import { CreateHakunDto } from './dto/create-hakun.dto';
import { UpdateHakunDto } from './dto/update-hakun.dto';

@Controller('hakun')
export class HakunController {
  constructor(private readonly hakunService: HakunService) {}

  @Post()
  create(@Body() createHakunDto: CreateHakunDto) {
    return this.hakunService.create(createHakunDto);
  }

  @Get()
  findAll() {
    return this.hakunService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.hakunService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateHakunDto: UpdateHakunDto) {
    return this.hakunService.update(name, updateHakunDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.hakunService.remove(name);
  }
}
