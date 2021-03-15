import { ApiProperty } from '@nestjs/swagger';

export class PhotoDto {
  @ApiProperty()
  token: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  isMain: boolean;
}
