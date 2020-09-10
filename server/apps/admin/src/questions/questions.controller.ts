import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Question } from '@libs/db/models/question.model';

@Crud({
  model: Question,
})
@Controller('questions')
@ApiTags('问题')
export class QuestionsController {
  constructor(
    @InjectModel(Question)
    private readonly model: ReturnModelType<typeof Question>,
  ) {}

  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        {
          prop: 'name',
          label: '课程名称',
          span: 24,
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          prop: 'cover',
          label: '课程封面',
          type: 'upload',
          listType: 'picture-img',
          width: '120',
          row: true,
          action: 'upload',
        },
      ],
    };
  }
}
