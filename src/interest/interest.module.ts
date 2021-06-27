import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestEntity } from '../entities/interest.entity';
import { InterestService } from './interest.service';
import { InterestController } from './interest.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InterestEntity])],
  providers: [InterestService],
  controllers: [InterestController],
  exports: [InterestService],
})
export class InterestModule {}
