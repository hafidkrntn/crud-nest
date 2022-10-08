import { Test, TestingModule } from '@nestjs/testing';
import { HakunService } from './hakun.service';

describe('HakunService', () => {
  let service: HakunService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HakunService],
    }).compile();

    service = module.get<HakunService>(HakunService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
