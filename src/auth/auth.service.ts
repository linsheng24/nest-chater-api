import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PhotoEntity } from '../entities/photo.entity';
import { UserProfileEntity } from '../entities/userProfile.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const profileData = user.profileData.map((data: UserProfileEntity) => {
      const { name, text, type, require, editable } = data.profileField;
      return { name, text, type, require, editable, data: data.data };
    });
    const photos = user.photos.map((photo: PhotoEntity) => {
      return {
        token: photo.id,
        url: photo.url,
        isMain: photo.isMain,
      };
    });

    if (user && user.encodePassword == password) {
      const { encodePassword, ...result } = user;
      return { ...result, photos: photos, profileData: profileData };
    } else {
      return null;
    }
  }

  async getPayloadUser(user) {
    const profileData = user.profileData.map((data: UserProfileEntity) => {
      const { name, text, type, require, editable } = data.profileField;
      return { name, text, type, require, editable, data: data.data };
    });
    const photos = user.photos.map((photo: PhotoEntity) => {
      return {
        token: photo.id,
        url: photo.url,
        isMain: photo.isMain,
      };
    });
    const { encodePassword, ...result } = user;
    return { ...result, photos: photos, profileData: profileData };
  }

  async login(user: any) {
    const payload = {
      id: user.id,
      email: user.email,
      photos: user.photos,
      profileData: user.profileData,
      sub: user.userId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
