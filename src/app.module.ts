import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { ExperienceModule } from './experience/experience.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    UserModule,
    SkillModule,
    ExperienceModule,
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
