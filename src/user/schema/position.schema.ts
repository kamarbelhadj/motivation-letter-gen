import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PositionDocument = Position & Document
@Schema()
export class Position{
    @Prop()
    title:string

    @Prop()
    place:string

    @Prop()
    date:Date
}
export const PositionSchema = SchemaFactory.createForClass(Position)
