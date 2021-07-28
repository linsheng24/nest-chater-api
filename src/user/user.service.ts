import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { getManager, Repository } from "typeorm";
import { EditProfileDto } from "../dtos/edit_profile_dto";
import { UserProfileEntity } from "../entities/userProfile.entity";
import { ProfileFieldEntity } from "../entities/profileField.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserProfileEntity)
    private userProfileRepository: Repository<UserProfileEntity>,
    @InjectRepository(ProfileFieldEntity)
    private profileFieldRepository: Repository<ProfileFieldEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<any> {
    const userData = await this.userRepository.findOne({
      where: { email: email },
      relations: ['photos', 'profileData', 'profileData.profileField'],
    })
    const { id, encodePassword, photos, profileData } = userData;
    const profileFields = await this.profileFieldRepository.find({});
    let profileDataDetail = profileFields.map(profileField => {
      let userFieldData = profileData.filter(item => item.profileField.id === profileField.id);
      if (userFieldData.length > 0) {
        return userFieldData[0];
      } else {
        return {
          data: null,
          profileField: profileField
        };
      }
    });
    return { id, email, encodePassword, photos, profileData: profileDataDetail };
  }

  async edit(userId, editProfileDto: EditProfileDto) {
    const { field, value } = editProfileDto;
    const entityManager = getManager();
    //先直接 update order insert 再抓 user

    const user = await entityManager.findOne(UserEntity, {
      where: { id: userId },
      relations: ['photos', 'profileData', 'profileData.profileField'],
    })
    for (const item of user.profileData) {
      if (item.profileField.name === field) {
        item.data = value;
        await this.userProfileRepository.save(item);
      }
    }
    return user;
  }
}
