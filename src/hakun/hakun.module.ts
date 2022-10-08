import { Module } from '@nestjs/common';
import { HakunService } from './hakun.service';
import { HakunController } from './hakun.controller';
import { Hakun, HakunSchema } from 'src/schemas/hakun.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hakun.name, schema: HakunSchema }]),
  ],
  controllers: [HakunController],
  providers: [HakunService],
})
export class HakunModule {}
