import {prop,modelOptions,Ref} from "@typegoose/typegoose"
import  {ApiProperty} from "@nestjs/swagger"
import {Course} from "@libs/db/models/course.model";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode {
    @ApiProperty({description:"视频名称"})
    @prop()
    name:string

    @ApiProperty({description:"文件路径"})
    @prop()
    file:string

    @prop({ref:"Course"})
    course:string
}