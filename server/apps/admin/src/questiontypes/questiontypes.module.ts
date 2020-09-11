import { Module } from '@nestjs/common';
import { QuestiontypesController } from './questiontypes.controller';

@Module({
  controllers: [QuestiontypesController]
})
export class QuestiontypesModule {}
