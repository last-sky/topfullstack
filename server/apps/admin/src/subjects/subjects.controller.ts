import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Subject } from '@libs/db/models/subject.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Subject,
})
@Controller('subjects')
export class SubjectsController {
  constructor(
    @InjectModel(Subject)
    private readonly model: ReturnModelType<typeof Subject>,
  ) {}

  @Get('option')
  option() {
    return {
      title: '科目管理',
      column: [
        {
          prop: 'code',
          label: '科目代码',
          row: true,
          search: true,
          regex: true,
        },
        {
          prop: 'name',
          label: '科目名称',
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          type: 'ueditor',
          label: '科目详情',
          span: 24,
          hide: true,
          display: true,
          options: {
            action: 'upload',
            oss: '',
            props: {},
            ali: {},
            qiniu: {},
          },
          prop: '测试',
        },
      ],
    };
  }
}
