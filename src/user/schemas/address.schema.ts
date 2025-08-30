import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type AdresseDocument = Adresse & Document
@Schema()
export class Adresse  {

    @Prop()
    city:string

    @Prop()
    state:string

    @Prop()
    country:string

    @Prop()
    zip:string   
}
export const AdresseSchema = SchemaFactory.createForClass(Adresse)