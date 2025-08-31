import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateExperienceDto {

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    place: string;

    @IsDate()
    @IsNotEmpty()
    startDate: Date;

    @IsDate()
    @IsNotEmpty()
    endDate: Date;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsArray()
    @IsNotEmpty()
    @IsString({each: true})
    keyFeautures: string[];
}
