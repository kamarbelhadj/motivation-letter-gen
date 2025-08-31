import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel:Model<UserDocument>  ){}

    //CreateUser 
    async creatUser (creatUserDto : CreateUserDto){
        const user = await new this.UserModel(creatUserDto);
        return user.save();

    }

    //findall users

    async findAllUsers():Promise<User[]>{
        return await this.UserModel.find().exec();
    }

    //Get user by id

    async getUserById(id:string){
        return await this.UserModel.findById(id).populate('experiences').exec();
    }
}
