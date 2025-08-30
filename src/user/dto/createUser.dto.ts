import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { AddressDto } from "./address.dto";
import { PositionDto } from "./position.dto";

export class CreateUserDto{
    name:string;
    lastName:string;
    phone:number;
    email: string;
    password: string;
    @ValidateNested()
    @Type(()=>AddressDto)
    adresse:AddressDto
    @ValidateNested()
    @Type(()=>PositionDto)
    position:PositionDto
}