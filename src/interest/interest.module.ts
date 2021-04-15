import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestEntity } from '../entities/interest.entity';
import { InterestService } from './interest.service';

@Module({
  imports: [TypeOrmModule.forFeature([InterestEntity])],
  providers: [InterestService],
  exports: [InterestService],
})
export class InterestModule {}
