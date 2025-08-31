import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillSchema } from './schema/skill.schema';
import { Experience, ExperienceSchema } from 'src/experience/schema/experience.schema';
import { User, UserSchema } from 'src/user/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema },{name:Experience.name,schema:ExperienceSchema},{name:User.name,schema:UserSchema}])],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
