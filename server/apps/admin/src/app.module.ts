import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@app/common';
import { MulterModule } from '@nestjs/platform-express';

import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { QuestionsModule } from './questions/questions.module';
import { ExamsModule } from './exams/exams.module';
import { SubjectsModule } from './subjects/subjects.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET,
            },
          }),
        };
      },
    }),
    EpisodesModule,
    UsersModule,
    CoursesModule,
    QuestionsModule,
    ExamsModule,
    SubjectsModule,
      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
