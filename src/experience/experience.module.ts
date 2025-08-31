import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from './schema/experience.schema';
import { User, UserSchema } from 'src/user/schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Experience.name,schema:ExperienceSchema},{name:User.name,schema:UserSchema}])],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
