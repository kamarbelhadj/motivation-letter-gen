import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

export type ExperienceDocument = Experience & Document
@Schema()
export class Experience {
    @Prop({required:true})
    title:string
    @Prop({required:true})
    place:string
    @Prop({required:true})
    startDate:Date
    @Prop({required:true})
    endDate:Date
    @Prop({required:true})
    type:string
    @Prop({required:true})
    keyFeautures:string[]
    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: Types.ObjectId;
}
export const ExperienceSchema = SchemaFactory.createForClass(Experience)