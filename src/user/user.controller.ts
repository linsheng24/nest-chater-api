import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDto } from '../dtos/user_dto';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @ApiTags('user')
  @ApiSecurity('basic')
  @UseGuards(JwtAuthGuard)
  @Get('getProfile')
  async get(@Request() req): Promise<UserDto> {
    return req.user;
  }
}
