import { Test, TestingModule } from '@nestjs/testing';
import { InterestController } from './interest.controller';
import { InterestService } from './interest.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InterestEntity } from '../entities/interest.entity';

describe('InterestController', () => {
  let controller: InterestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InterestService,
        {
          provide: getRepositoryToken(InterestEntity),
          useValue: {},
        },
      ],
      controllers: [InterestController],
    }).compile();

    controller = module.get<InterestController>(InterestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
