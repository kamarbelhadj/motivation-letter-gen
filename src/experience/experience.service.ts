import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Experience, ExperienceDocument } from './schema/experience.schema';
import { User, UserDocument } from 'src/user/schema/user.schema'; // import user schema

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name) private experienceModel: Model<ExperienceDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>, // inject user model
  ) {}

  // CREATE EXPERIENCE TO USER
  async create(createExperienceDto: CreateExperienceDto) {
  const updatedUser = await this.userModel.findById(createExperienceDto.userId);
  if(!updatedUser){
    throw new NotFoundException('User not found');
  }
  const experience = new this.experienceModel(createExperienceDto);  
  experience.save();
  updatedUser.experiences.push(experience._id )
  const savedExp = await updatedUser.save();
  return savedExp;
  }


  //FIND ALL USERS
  findAll() {
    return this.experienceModel.find().exec();
  }

  findOne(id: string) {
    return this.experienceModel.findById(id).exec();
  }

  update(id: string, updateExperienceDto: UpdateExperienceDto) {
    return this.experienceModel
      .findByIdAndUpdate(id, updateExperienceDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.experienceModel.findByIdAndDelete(id).exec();
  }
}
