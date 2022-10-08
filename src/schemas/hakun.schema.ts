import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HakunDocument = Hakun & Document;

@Schema()
export class Hakun {
  @Prop()
  name: string;

  @Prop()
  furType: string;
}

export const HakunSchema = SchemaFactory.createForClass(Hakun);
