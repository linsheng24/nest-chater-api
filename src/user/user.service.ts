import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { getManager, Repository } from 'typeorm';
import { EditProfileDto } from '../dtos/edit_profile_dto';
import { UserProfileEntity } from '../entities/userProfile.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserProfileEntity)
    private userProfileRepository: Repository<UserProfileEntity>,
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

  async edit(userId, editProfileDto: EditProfileDto) {
    const { field, value } = editProfileDto;
    const entityManager = getManager();
    const user = await entityManager.findOne(UserEntity, {
      where: { id: userId },
      relations: ['photos', 'profileData', 'profileData.profileField'],
    });

    for (const item of user.profileData) {
      if (item.profileField.name === field) {
        item.data = value;
        await this.userProfileRepository.save(item);
      }
    }
    return user;
  }
}
