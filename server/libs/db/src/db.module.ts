import {Global, Module} from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose"
import {User} from "@libs/db/models/user.model";
import {Course} from "@libs/db/models/course.model";
import {Episode} from "@libs/db/models/episode.model";
import {Subject} from "@libs/db/models/subject.model";
import {Exam} from "@libs/db/models/exam.model";
import {Question} from "@libs/db/models/question.model";
import {QuestionType} from "@libs/db/models/questionType.model";
import {Action} from "@libs/db/models/action.model";

const models=TypegooseModule.forFeature([
    User,
    Course,
    Episode,
    Subject,
    Exam,
    Question,
    QuestionType,
    Action,

])
@Global()
@Module({
    imports:[
        TypegooseModule.forRootAsync({
           useFactory(){
                return {
                    uri:process.env.DB,
                    useNewUrlParser:true,
                    useUnifiedTopology:true,
                    useCreateIndex:true,
                    useFindAndModify:false
                }
           }
        }),
        // TypegooseModule.forRoot(process.env.DB,{
        //     useNewUrlParser:true,
        //     useUnifiedTopology:true,
        //     useCreateIndex:true,
        //     useFindAndModify:false
        // }),
        models,
    ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
