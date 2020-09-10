import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Subject } from './subject.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Question {
  @ApiProperty({ description: '问题' })
  @prop()
  title: string;

  @ApiProperty({ description: '备选项' })
  @prop()
  option: string;

  @ApiProperty({ description: '正确答案' })
  @prop()
  answer: string;

  @ApiProperty({ description: '问题延伸' })
  @prop()
  extend: string;
  @prop({ ref: 'Exam' })
  subject: string;
}
