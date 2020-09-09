import {Controller, Get} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {Course} from '@libs/db/models/course.model';
import {Crud} from "nestjs-mongoose-crud"
import {ApiTags} from "@nestjs/swagger"
import {ReturnModelType} from '@typegoose/typegoose';

@Crud({
    model: Course
})
@Controller('courses')
@ApiTags("课程")
export class CoursesController {
    constructor(
        @InjectModel(Course)
        private readonly model: ReturnModelType<typeof Course>
    ) {
    }

    @Get("option")
    option() {
        return {
            title: "课程管理",
            column: [
                {prop: "name", label: "课程名称",span:24,
                    sortable: true, search: true, regex: true,row:true},
                {prop: "cover", label: "课程封面",
                    type:"upload",listType:"picture-img",
                    width:"120",
                    row:true,action:"upload"},
            ]
        }
    }

}


