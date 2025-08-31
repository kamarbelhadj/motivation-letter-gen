import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { Mongoose } from "mongoose";
import { Experience } from "src/experience/schema/experience.schema";

@Schema()
export class Skill {
    @Prop({required:true})
    name:string
    @Prop({required:true})
    level:string
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Experience'})
    experiences:Experience[]

    @Prop({required:true , type:mongoose.Schema.Types.ObjectId,ref:'User'})
    userId:string
    
}
