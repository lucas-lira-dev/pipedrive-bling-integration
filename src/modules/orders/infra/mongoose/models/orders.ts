import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Order extends Document {
  @Prop()
  date: string;

  @Prop()
  valueTotal: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
