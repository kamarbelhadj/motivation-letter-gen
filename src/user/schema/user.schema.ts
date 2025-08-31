import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Adresse, AdresseSchema } from "./address.schema";
import { Position, PositionSchema } from "./position.schema";
import mongoose, { Types } from "mongoose";
export type UserDocument = User & Document

@Schema()
export class User{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    lastName:string;

    @Prop({required:true})
    phone:number

    @Prop({required:true ,unique:true})
    email:string

    @Prop({required:true})
    password:string

    @Prop({type:AdresseSchema})
    adresse:Adresse

    @Prop({type:PositionSchema})
    position:Position

   @Prop({ type: [{ type: Types.ObjectId, ref: 'Experience' }] })
experiences: Types.ObjectId[];

}
export const UserSchema = SchemaFactory.createForClass(User)