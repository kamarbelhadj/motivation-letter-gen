import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Mongoose, Types } from "mongoose";
import { Experience } from "src/experience/schema/experience.schema";
export type SkillDocument = Skill & Document
@Schema()
export class Skill {
    @Prop({required:true})
    name:string
    @Prop({required:true})
    level:string
    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: Types.ObjectId;
    @Prop({ type: [{ type: Types.ObjectId, ref: 'Experience' }] })
    experiences: Types.ObjectId[];
}

export const SkillSchema = SchemaFactory.createForClass(Skill)