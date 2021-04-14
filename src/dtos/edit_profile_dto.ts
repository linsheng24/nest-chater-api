import { ApiProperty } from '@nestjs/swagger';

export class EditProfileDto {
  @ApiProperty()
  field: string;

  @ApiProperty()
  value: string;
}
