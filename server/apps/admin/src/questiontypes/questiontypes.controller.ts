import {Controller, Get} from '@nestjs/common';
import {Crud} from "nestjs-mongoose-crud";
import {QuestionType} from "@libs/db/models/questionType.model";
import {ApiTags} from "@nestjs/swagger";
import {InjectModel} from "nestjs-typegoose";
import {ReturnModelType} from "@typegoose/typegoose";


@Crud({
  model: QuestionType,
})
@ApiTags('问题类型')
@Controller('questiontypes')
export class QuestiontypesController {
  constructor(
    @InjectModel(QuestionType) private readonly model: ReturnModelType<typeof QuestionType>,
  ) {}

  @Get("option")
    option(){
      return{
          title:"题型管理",
          column:[
              {
                  prop:"name",
                  label:"题型",
                  type:"input",
                  row:true,
              },
              {
                  prop:"type",
                  label:"输入类型",
                  row:true,

              }
          ]
      }
  }
}
