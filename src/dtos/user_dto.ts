import { ApiProperty } from '@nestjs/swagger';
import { PhotoDto } from './photo_dto';

export class UserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  photos: PhotoDto[];

  @ApiProperty()
  profileData: [];
}
