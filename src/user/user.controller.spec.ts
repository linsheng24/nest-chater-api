import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserProfileEntity } from '../entities/userProfile.entity';
import { forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserService } from './user.service';
import { Connection } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        AuthService,
        {
          provide: 'JwtService',
          useValue: {},
        },
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(UserProfileEntity),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
