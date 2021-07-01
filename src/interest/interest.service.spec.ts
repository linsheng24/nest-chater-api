import { Test, TestingModule } from '@nestjs/testing';
import { InterestService } from './interest.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InterestEntity } from '../entities/interest.entity';

describe('InterestService', () => {
  let service: InterestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InterestService,
        {
          provide: getRepositoryToken(InterestEntity),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<InterestService>(InterestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
