import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from '@libs/db/models/course.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Action {
  @ApiProperty({ description: '用户id' })
  @prop({
    ref: 'User',
  })
  user: string;

  @ApiProperty({ description: '操作对象' })
  @prop({
    enum: ['Course', 'Episode'],
  })
  type: string;

  @prop({
    refPath: 'type',
  })
  object: string;

  @ApiProperty({ description: '操作名称' })
  @prop({
    enum: ['like',"upVote"],
  })
  name: string;
}
