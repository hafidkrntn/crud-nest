import { Test, TestingModule } from '@nestjs/testing';
import { HakunController } from './hakun.controller';
import { HakunService } from './hakun.service';

describe('HakunController', () => {
  let controller: HakunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HakunController],
      providers: [HakunService],
    }).compile();

    controller = module.get<HakunController>(HakunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
