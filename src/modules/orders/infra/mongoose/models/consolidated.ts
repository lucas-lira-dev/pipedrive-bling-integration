import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Consolidated extends Document {
  @Prop()
  date: string;

  @Prop()
  valueTotal: number;
}

export const OrderSchema = SchemaFactory.createForClass(Consolidated);
