import { IsArray, IsString } from "class-validator";

export class CreateSkillDto {
    @IsString()
    name: string;

    @IsString()
    level: string

    @IsString()
    userId: string

    @IsArray()
    @IsString({each: true})
    experiences: string[]
}
