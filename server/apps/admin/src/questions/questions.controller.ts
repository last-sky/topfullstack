import { Controller, Get } from '@nestjs/common';
import { Crud, CrudConfig } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Question } from '@libs/db/models/question.model';
import { QuestionType } from '@libs/db/models/questionType.model';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const aa = require('test.json');

@Crud({
  model: Question,
  routes: {
    find: {
      sort: { '_id': -1 },
    },
  },
})
@Controller('questions')
@ApiTags('问题')
export class QuestionsController {
  constructor(
    @InjectModel(Question)
    private readonly model: ReturnModelType<typeof Question>,
    @InjectModel(QuestionType)
    private readonly QuestionTypeModel: ReturnModelType<typeof QuestionType>,

  ) {}

  @Get('init')
  questionsInit() {
    return this.model.insertMany(aa);
  }

  @Get('option')
  async option() {
    const types = (await this.QuestionTypeModel.find()).map((v) => ({
      label: v.name,
      value: v._id,
    }));
    return {
      title: '试题管理',
      column: [
        {
          prop: 'type',
          label: '题型',
          dicData: types,
          type: 'select',
          row: true,
          multiple:true,

        },
        {
          prop: 'url',
          type: 'url',
          label: '来源',
          row: true,
        },
        {
          prop: 'title',
          label: '问题',
          type: 'textarea',
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          prop: 'option',
          label: '选项',
          type: 'textarea',
          row: true,
        },
        {
          prop: 'answer',
          type: 'radio',
          label: '单选框组',
          dicData: [
            {
              label: 'A',
              value: 'A',
            },
            {
              label: 'B',
              value: 'B',
            },
            {
              label: 'C',
              value: 'C',
            },
          ],
        },
      ],
    };
  }
}
