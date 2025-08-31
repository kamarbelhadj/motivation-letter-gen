import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { Experience, ExperienceSchema } from 'src/experience/schema/experience.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{name:Experience.name,schema:ExperienceSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
