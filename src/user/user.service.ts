import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: { email: email },
      relations: ['photos', 'profileData', 'profileData.profileField'],
    });
  }
}
