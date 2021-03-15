import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PhotoEntity } from '../entities/photo.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const photos = user.photos.map((photo: PhotoEntity) => {
      return {
        token: photo.id,
        url: photo.url,
        isMain: photo.isMain,
      };
    });

    if (user && user.encodePassword == password) {
      const { encodePassword, ...result } = user;
      return { ...result, photos: photos };
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      photos: user.photos,
      sub: user.userId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
