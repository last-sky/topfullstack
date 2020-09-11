import { Test, TestingModule } from '@nestjs/testing';
import { QuestiontypesController } from './questiontypes.controller';

describe('QuestiontypesController', () => {
  let controller: QuestiontypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestiontypesController],
    }).compile();

    controller = module.get<QuestiontypesController>(QuestiontypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
