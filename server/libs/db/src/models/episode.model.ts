import {prop,modelOptions} from "@typegoose/typegoose"
import  {ApiProperty} from "@nestjs/swagger"

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode {
    @ApiProperty({description:"视频名称"})
    @prop()name:string
    @ApiProperty({description:"文件路径"})
    @prop()file:string
}