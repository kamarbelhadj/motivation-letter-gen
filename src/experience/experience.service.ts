import { Injectable } from '@nestjs/common';
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

  // ✅ create experience and add to user
  async create(createExperienceDto: CreateExperienceDto) {
    const experience = new this.experienceModel({
      title: createExperienceDto.title,
      place: createExperienceDto.place,
      startDate: createExperienceDto.startDate,
      endDate: createExperienceDto.endDate,
      type: createExperienceDto.type,
      keyFeautures: createExperienceDto.keyFeautures,
      user: createExperienceDto.userId, 
    });

    const savedExp = await experience.save();
    //console.log('user id', createExperienceDto.userId);
    
  const updatedUser = await this.userModel.findByIdAndUpdate(
  createExperienceDto.userId,
  { $push: { experiences: savedExp._id } },
  { new: true } 
);

//onsole.log('Updated user:', updatedUser);


    return savedExp;
  }

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
