import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Exam } from '@libs/db/models/exam.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Question } from '@libs/db/models/question.model';
@Crud({
  model: Exam,
})
@Controller('exams')
@ApiTags('考试科目')
export class ExamsController {
  constructor(
    @InjectModel(Exam)
    private readonly model: ReturnModelType<typeof Exam>,
  ) {}

  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        {
          prop: 'name',
          label: '考试名称',
          span: 24,
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          prop: 'code',
          label: '考试代码',
          row: true,
        },
      ],
    };
  }
}
