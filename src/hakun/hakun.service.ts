import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hakun, HakunDocument } from 'src/schemas/hakun.schema';
import { CreateHakunDto } from './dto/create-hakun.dto';
import { UpdateHakunDto } from './dto/update-hakun.dto';

@Injectable()
export class HakunService {
  constructor(
    @InjectModel(Hakun.name) private hakunModel: Model<HakunDocument>,
  ) {}

  async create(createHakunDto: CreateHakunDto): Promise<Hakun> {
    return new this.hakunModel(createHakunDto).save();
  }

  async findAll() {
    return this.hakunModel.find();
  }

  async findOne(name: string) {
    return this.hakunModel.findOne({ name });
  }

  async update(name: string, updateHakunDto: UpdateHakunDto) {
    return this.hakunModel.updateOne({ name }, { $set: { ...updateHakunDto } });
  }

  async remove(name: string) {
    return this.hakunModel.deleteOne({ name });
  }
}
