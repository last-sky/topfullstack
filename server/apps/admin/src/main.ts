import { NestFactory } from '@nestjs/core';
import {SwaggerModule,DocumentBuilder} from "@nestjs/swagger"
import { AppModule } from './app.module';
import {from} from "rxjs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const options= new DocumentBuilder()
      .setTitle("全站之巅-后台管理API")
      .setDescription("供后台管理界面调用的API")
      .setVersion("1.0")
      .addTag("cats")
      .build()

  const document =SwaggerModule.createDocument(app,options)
  SwaggerModule.setup("api-docs",app,document)

  await app.listen(3000);
  console.log("启动服务端口 http://localhost:3000/api-docs")
}
bootstrap();
