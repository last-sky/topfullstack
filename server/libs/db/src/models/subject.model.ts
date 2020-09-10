import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from '@libs/db/models/question.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
})
export class Subject {
  @ApiProperty({ description: '科目名称' })
  @prop()
  name: string;
  @ApiProperty({ description: '科目编号' })
  @prop()
  code: string;

  @arrayProp({
    ref: 'Question',
    localField: '_id',
    foreignField: 'course',
  })
  subjects: [string];
}
