import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterestEntity } from '../entities/interest.entity';

@Injectable()
export class InterestService {
  constructor(
    @InjectRepository(InterestEntity)
    private interestEntityRepository: Repository<InterestEntity>,
  ) {}

  async findAll(): Promise<InterestEntity[]> {
    return this.interestEntityRepository.find();
  }
}
