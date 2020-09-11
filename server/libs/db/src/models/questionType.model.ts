import {prop} from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";

export class QuestionType{
    @ApiProperty({description:"题型名称"})
    @prop()
    name:string
    @ApiProperty({description:"输入类型"})
    @prop()
    type:string
}