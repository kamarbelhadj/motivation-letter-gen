import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Experience, ExperienceDocument } from 'src/experience/schema/experience.schema';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from './schema/skill.schema';
import { User, UserDocument } from 'src/user/schema/user.schema';

@Injectable()
export class SkillService {
  constructor(@InjectModel(Experience.name) private experienceModel: Model<ExperienceDocument>,
              @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
              @InjectModel(User.name) private userModel: Model<UserDocument>){}

// CREATE SKILL
async create(createSkillDto: CreateSkillDto) {
  const experiencesList = createSkillDto.experiences;

  for (let i = 0; i < experiencesList.length; i++) {
    const experience = await this.experienceModel.findById(experiencesList[i]);
    if (!experience) {
      throw new NotFoundException(`Experience ${experiencesList[i]} not found`);
    }
  }

  const skill = new this.skillModel(createSkillDto);
  const savedSkill = await skill.save();
  const updateUser = await this.userModel.findById(createSkillDto.userId);
  if (!updateUser) {
    throw new NotFoundException(`User ${createSkillDto.userId} not found`);
  }
  updateUser.skills.push(savedSkill._id);
  await updateUser.save();
  return savedSkill;
}


  findAll() {
    return `This action returns all skill`;
  }

  findOne(id: number) {
    return this.skillModel.findById(id)
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
